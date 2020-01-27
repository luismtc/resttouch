import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbrirMesaComponent } from '../abrir-mesa/abrir-mesa.component';
import { Area } from '../../interfaces/area';
import { AreaService } from '../../services/area.service';
import { Comanda } from '../../interfaces/comanda';
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

  private divSize: any = { h: 0, w: 0 };
  public openedRightPanel: boolean;

  @ViewChild('matTabArea', { static: false }) pestania: ElementRef;
  @ViewChild('rightSidenav', { static: false }) rightSidenav: any;
  @ViewChild('tabArea', { static: false }) tabArea: MatTab;
  public lstTabsAreas: Area[] = [];
  public mesaSeleccionada: any;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public areaSrvc: AreaService,
    public comandaSrvc: ComandaService
  ) { }

  ngOnInit() {
    this.loadAreas();
  }

  ngAfterViewInit() {
    setTimeout(() => this.setDivSize(), 600);
  }

  loadAreas = () => {
    this.areaSrvc.get().subscribe((res) => {
      this.lstTabsAreas = res;
    });
  }

  private setDivSize() {
    this.divSize.w = this.pestania.nativeElement.offsetWidth;
    this.divSize.h = this.pestania.nativeElement.offsetHeight;
  }

  onResize = (event: any) => this.setDivSize();

  onClickMesa(m: any) {
    switch (+m.mesaSelected.estatus) {
      case 1: this.openAbrirMesaDialog(m.mesaSelected); break;
      case 2: this.toggleRightSidenav(); break;
    }
  }

  private openAbrirMesaDialog(m: any) {
    this.mesaSeleccionada = {
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
      data: this.mesaSeleccionada
    });

    abrirMesaRef.afterClosed().subscribe((result: Comanda) => {
      if (result) {
        this.mesaSeleccionada = result;
        // console.log(JSON.stringify(this.mesaSeleccionada));
        this.comandaSrvc.save(this.mesaSeleccionada).subscribe(res => {
          console.log(res);
          if (res.exito) {
            this.mesaSeleccionada = res.comanda;
            this.toggleRightSidenav();
          } else {
            this._snackBar.open(`${res.mensaje}`, 'ERROR', { duration: 5000 });
          }
        });
      }
    });
  }

  toggleRightSidenav = () => this.rightSidenav.toggle();

  cerrandoRightSideNav = () => this.mesaSeleccionada = { cuentas: [] };

}
