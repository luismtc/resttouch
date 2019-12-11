import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbrirMesaComponent } from '../abrir-mesa/abrir-mesa.component';

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

@Component({
  selector: 'app-tran-areas',
  templateUrl: './tran-areas.component.html',
  styleUrls: ['./tran-areas.component.css']
})
export class TranAreasComponent implements OnInit, AfterViewInit {

  private divSize: any = { h: 0, w: 0 };

  @ViewChild('matTabArea', { static: false }) pestania: ElementRef;
  public lstTabsAreas: any[] = [];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.lstTabsAreas = lstAreas;
  }

  ngAfterViewInit() {
    setTimeout(() => this.setDivSize());
  }

  private setDivSize() {
    this.divSize.w = this.pestania.nativeElement.offsetWidth;
    this.divSize.h = this.pestania.nativeElement.offsetHeight;
  }

  onResize(event: any) {
    this.setDivSize();
  }

  onClickMesa(m: any) {
    if (+m.mesaSelected.estatus == 1) {
      this.openAbrirMesaDialog();
    }
  }

  private openAbrirMesaDialog() {
    const abrirMesaRef = this.dialog.open(AbrirMesaComponent, {
      width: '55%',
      data: { mesero: '', comensales: '1', esEvento: false, dividirCuentasPorSillas: false }
    });

    abrirMesaRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
