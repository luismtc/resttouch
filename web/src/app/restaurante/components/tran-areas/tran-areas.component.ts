import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';
import { GLOBAL } from '../../../shared/global';
import { LocalstorageService } from '../../../admin/services/localstorage.service';

import { AbrirMesaComponent } from '../abrir-mesa/abrir-mesa.component';
import { TranComandaComponent } from '../tran-comanda/tran-comanda.component';
import { Area } from '../../interfaces/area';
import { AreaService } from '../../services/area.service';
import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { ComandaService } from '../../services/comanda.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tran-areas',
  templateUrl: './tran-areas.component.html',
  styleUrls: ['./tran-areas.component.css']
})
export class TranAreasComponent implements OnInit, AfterViewInit {

  public divSize: any = { h: 0, w: 0 };
  public openedRightPanel: boolean;

  @ViewChild('matTabArea', { static: false }) pestania: ElementRef;
  @ViewChild('rightSidenav', { static: false }) rightSidenav: MatSidenav;
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

  actualizar = () => {
    // console.log('MESA SELECCIONADA = ', this.mesaSeleccionada);
    const area = this.lstTabsAreas.find((c: Area) => +c.area === +this.mesaSeleccionada.mesa.area.area);
    // console.log('AREA = ', area);
    const areaIndex = this.lstTabsAreas.findIndex((c: Area) => +c.area === +this.mesaSeleccionada.mesa.area.area);
    // console.log('AREA IDX = ', areaIndex);
    const mesaIndex = area.mesas.findIndex(x => +x.mesa === +this.mesaSeleccionada.mesa.mesa);
    // console.log('MESA IDX = ', mesaIndex);
    this.lstTabsAreas[areaIndex].mesas[mesaIndex].estatus = 1;
    // console.log('MESA = ', this.lstTabsAreas[areaIndex].mesas[mesaIndex]);
    this.toggleRightSidenav();
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

  toggleRightSidenav = () => {
    // console.log('ESTATUS DEL PANEL DERECHO = ', this.rightSidenav.opened);
    this.rightSidenav.toggle().then((res: MatDrawerToggleResult) => {
      // console.log('RESULTADO DEL TOGGLE = ', res);
      if (res === 'close') {
        // console.log(`YA CERRADO ${moment().format(GLOBAL.dateTimeFormat)}`);
        // console.log('MESA SELECCIONADA DESPUÉS DEL TOGGLE DEL RIGHT SIDE PANEL = ', this.mesaSeleccionada);
        // this.comandaSrvc.cerrarEstacion(this.mesaSeleccionada.comanda).subscribe(resCierre => {});
      } else if (res === 'open') {
        // console.log('CUENTAS DE LA MESA CON EL RIGHT PANEL YA ABIERTO', this.mesaSeleccionada.cuentas);
        if (this.mesaSeleccionada.cuentas.length === 1) {
          this.snTrancomanda.setSelectedCuenta(this.mesaSeleccionada.cuentas[0].numero);
        }
      }
    });
  }

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
    this.snTrancomanda.resetListadoArticulos();
    // console.log('MESA SELECCIONADA EN CERRANDO RIGHT SIDE PANEL = ', this.mesaSeleccionada);
    /*this.comandaSrvc.cerrarEstacion(this.mesaSeleccionada.comanda).subscribe(res => {
      console.log('CERRANDO RIGHT SIDE PANEL.', res);
      this.loadComandaMesa(this.mesaSeleccionada.mesa, false);
    });*/
    // console.log(`CERRANDO ${moment().format(GLOBAL.dateTimeFormat)}`);
    // this.loadComandaMesa(this.mesaSeleccionada.mesa, false);
    this.fuerzaCierreComanda(false);
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

  fuerzaCierreComanda = (shouldToggle: boolean) => {
    this.comandaSrvc.cerrarEstacion(this.mesaSeleccionada.comanda).subscribe(resCierre => {
      this.loadComandaMesa(this.mesaSeleccionada.mesa, shouldToggle);
    });
  }

  loadComandaMesa = (obj: any, shouldToggle = true) => {
    // console.log(obj);
    this.comandaSrvc.getComandaDeMesa(obj.mesa).subscribe((res: ComandaGetResponse) => {
      // console.log(res); return;
      if (res.exito) {
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
        } else {
          // console.log(`SIN TOGGLE RIGHT PANEL ${moment().format(GLOBAL.dateTimeFormat)}`);
        }
      } else {
        if (res.mensaje) {
          this._snackBar.open(`${res.mensaje}`, 'ERROR', { duration: 5000 });
        }
        this.checkEstatusMesa();
      }
      this.checkEstatusMesa();
    });
  }

}
