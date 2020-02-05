import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbrirMesaComponent } from '../abrir-mesa/abrir-mesa.component';
import { TranComandaComponent } from '../tran-comanda/tran-comanda.component';
import { Area } from '../../interfaces/area';
import { AreaService } from '../../services/area.service';
import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { ComandaService } from '../../services/comanda.service';

/*
const tam = 72;
const lstAreas = [
  {
    area: 1,
    nombre: 'Area 01',
    mesas: [
      { numero: 1, posx: '1%', posy: '1%', tamanio: tam, estatus: 1 },
      { numero: 2, posx: '10%', posy: '10%', tamanio: tam, estatus: 1 },
      { numero: 3, posx: '20%', posy: '5%', tamanio: tam, estatus: 2 },
      { numero: 4, posx: '30%', posy: '35%', tamanio: tam, estatus: 1 },
      { numero: 5, posx: '2.5%', posy: '25%', tamanio: tam, estatus: 1 },
    ]
  },
  {
    area: 2,
    nombre: 'Area 02',
    mesas: []
  },
  {
    area: 3,
    nombre: 'Area 03',
    mesas: []
  },
];
*/

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
  };

  loadAreas = () => {
    this.areaSrvc.get().subscribe((res) => {
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
    const idxArea = this.lstTabsAreas.findIndex(a => +a.area === +m.area);
    if (idxArea > -1) {
      const idxMesa = this.lstTabsAreas[idxArea].mesas.findIndex(m => +m.mesa === +m.mesa);
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
      cuentas: [
        {
          numero: 1,
          nombre: 'Única',
          productos: []
        }
      ]
    };

    const abrirMesaRef = this.dialog.open(AbrirMesaComponent, {
      width: '55%',
      disableClose: true,
      data: this.mesaSeleccionadaToOpen
    });

    abrirMesaRef.afterClosed().subscribe((result: Comanda) => {
      if (result) {
        this.mesaSeleccionadaToOpen = result;
        // console.log(JSON.stringify(this.mesaSeleccionada));
        this.comandaSrvc.save(this.mesaSeleccionadaToOpen).subscribe(res => {
          console.log(res);
          if (res.exito) {
            this.mesaSeleccionada = res.comanda;
            this.setEstatusMesa(m, +res.comanda.mesa.estatus);
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
    this.snTrancomanda.resetMesaEnUso(); 
    this.snTrancomanda.resetLstProductosDeCuenta();
    this.snTrancomanda.resetLstProductosSeleccionados();
    this.snTrancomanda.resetCuentaActiva();
  }

  loadComandaMesa = (obj: any) => {
    this.comandaSrvc.getComandaDeMesa(obj.mesa).subscribe((res: ComandaGetResponse) => {
      if (res) {
        this.mesaSeleccionada = res;
        this.snTrancomanda.llenaProductosSeleccionados();
        this.toggleRightSidenav();
      } else {
        this._snackBar.open(`Problema al mostrar la comanda de la mesa #${obj.numero}`, 'ERROR', { duration: 5000 });
      }
    });
  }

}
