import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../shared/global';
import { LocalstorageService } from '../../../admin/services/localstorage.service';

import { AbrirMesaComponent } from '../abrir-mesa/abrir-mesa.component';
import { TranComandaComponent } from '../tran-comanda/tran-comanda.component';
import { Area } from '../../interfaces/area';
import { AreaService } from '../../services/area.service';
import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { ComandaService } from '../../services/comanda.service';

@Component({
  selector: 'app-tran-areas',
  templateUrl: './tran-areas.component.html',
  styleUrls: ['./tran-areas.component.css']
})
export class TranAreasComponent implements OnInit, AfterViewInit {

  public divSize: any = { h: 0, w: 0 };
  public openedRightPanel: boolean;

  @ViewChild('matTabArea', { static: false }) pestania: ElementRef;
  @ViewChild('rightSidenav', { static: false }) rightSidenav: any;
  @ViewChild('tabArea', { static: false }) tabArea: MatTab;
  @ViewChild('snTranComanda', { static: false }) snTrancomanda: TranComandaComponent;
  public lstTabsAreas: Area[] = [];
  public mesaSeleccionada: any;
  public mesaSeleccionadaToOpen: any;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
    public areaSrvc: AreaService,
    public comandaSrvc: ComandaService
  ) { }

  ngOnInit() {
    this.loadAreas();
    this.resetMesaSeleccionada();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setDivSize();
      this.snTrancomanda.resetMesaEnUso();
    }, 600);
  }

  resetMesaSeleccionada = () => this.mesaSeleccionada = {
    comanda: null, usuario: null, sede: null, estatus: null,
    mesa: {
      mesa: null,
      area: { area: null, sede: null, area_padre: null, nombre: null },
      numero: null, posx: null, posy: null, tamanio: null, estatus: null
    },
    cuentas: []
  }

  loadAreas = () => {
    this.areaSrvc.get({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((res) => {
      this.lstTabsAreas = res;
    });
  }

  setDivSize() {
    this.divSize.w = this.pestania.nativeElement.offsetWidth;
    this.divSize.h = this.pestania.nativeElement.offsetHeight;
  }

  onResize = (event: any) => this.setDivSize();

  onClickMesa(m: any) {
    // console.log(m.mesaSelected); return;
    switch (+m.mesaSelected.estatus) {
      case 1: this.openAbrirMesaDialog(m.mesaSelected); break;
      case 2: this.loadComandaMesa(m.mesaSelected); break;
    }
  }

  setEstatusMesa = (m: any, estatus: number) => {
    // console.log('Mesa = ', m);
    // console.log('Estatus solicitado = ', estatus);
    const idxArea = this.lstTabsAreas.findIndex(a => +a.area === +m.area);
    // console.log(`Area = ${idxArea}`);
    if (idxArea > -1) {
      const idxMesa = this.lstTabsAreas[idxArea].mesas.findIndex(l => +l.mesa === +m.mesa);
      // console.log(`Mesa = ${idxMesa}`);
      if (idxMesa > -1) {
        this.lstTabsAreas[idxArea].mesas[idxMesa].estatus = estatus;
      }
    }
  }

  openAbrirMesaDialog(m: any) {
    this.mesaSeleccionadaToOpen = {
      nombreArea: this.tabArea.textLabel,
      area: +m.area,
      mesa: +m.mesa,
      numero: +m.numero,
      mesero: '',
      comensales: '1',
      comanda: 0,
      esEvento: false,
      dividirCuentasPorSillas: false,
      estatus: 1,
      cuentas: [
        {
          numero: 1,
          nombre: 'Única',
          productos: []
        }
      ]
    };

    const abrirMesaRef = this.dialog.open(AbrirMesaComponent, {
      width: '50%',
      height: 'auto',
      disableClose: true,
      data: this.mesaSeleccionadaToOpen
    });

    abrirMesaRef.afterClosed().subscribe((result: Comanda) => {
      if (result) {
        this.mesaSeleccionadaToOpen = result;
        // console.log(JSON.stringify(this.mesaSeleccionada));
        this.comandaSrvc.save(this.mesaSeleccionadaToOpen).subscribe(res => {
          // console.log(res);
          if (res.exito) {
            this.mesaSeleccionada = res.comanda;
            // console.log('m', m);
            this.setEstatusMesa(m, +res.comanda.mesa.estatus);
            this.snTrancomanda.llenaProductosSeleccionados(this.mesaSeleccionada);
            this.snTrancomanda.setSelectedCuenta(this.mesaSeleccionada.cuentas[0].numero);
            this.toggleRightSidenav();
          } else {
            this._snackBar.open(`${res.mensaje}`, 'ERROR', { duration: 5000 });
          }
        });
      }
    });
  }

  toggleRightSidenav = () => this.rightSidenav.toggle();

  cerrandoRightSideNav = () => {
    // console.log('Antes de "resetMesaEnUso"');
    this.snTrancomanda.resetMesaEnUso();
    // console.log('Antes de "resetLstProductosDeCuenta"');
    this.snTrancomanda.resetLstProductosDeCuenta();
    // console.log('Antes de "resetLstProductosSeleccionados"');
    this.snTrancomanda.resetLstProductosSeleccionados();
    // console.log('Antes de "resetCuentaActiva"');
    this.snTrancomanda.resetCuentaActiva();
    // console.log('Antes de "loadComandaMesa"');
    this.loadComandaMesa(this.mesaSeleccionada.mesa, false);
  }

  checkEstatusMesa = () => {
    // console.log('MESA = ', this.mesaSeleccionada);
    if (!!this.mesaSeleccionada && !!this.mesaSeleccionada.cuentas && this.mesaSeleccionada.cuentas.length > 0) {
      const abiertas = this.mesaSeleccionada.cuentas.filter(cta => +cta.cerrada === 0).length || 0;
      // console.log(`ABIERTAS = ${abiertas}`);
      if (abiertas === 0) {
        this.setEstatusMesa({
          area: this.mesaSeleccionada.mesa.area.area,
          mesa: this.mesaSeleccionada.mesa.mesa
        }, 1);
      }
    }
  }

  loadComandaMesa = (obj: any, shouldToggle = true) => {
    // console.log(obj);
    this.comandaSrvc.getComandaDeMesa(obj.mesa).subscribe((res: ComandaGetResponse) => {
      // console.log(res); return;
      if (res) {
        if (!Array.isArray(res)) {
          this.mesaSeleccionada = res;
        } else {
          if (res.length === 0) {
            this.mesaSeleccionada = {
              mesa: this.mesaSeleccionada.mesa,
              cuentas: [
                { cerrada: 1 }
              ]
            };
          }
        }
        // console.log('MESA SELECTED = ', this.mesaSeleccionada);
        this.checkEstatusMesa();
        if (shouldToggle) {
          const cuentas = this.mesaSeleccionada.cuentas;
          this.snTrancomanda.llenaProductosSeleccionados(this.mesaSeleccionada);
          this.toggleRightSidenav();
          if (cuentas.length === 1){
            this.snTrancomanda.setSelectedCuenta(cuentas[0].numero);
          }
        }

      } else {
        this._snackBar.open(`Problema al mostrar la comanda de la mesa #${obj.numero}`, 'ERROR', { duration: 5000 });
      }
    });
  }

}
