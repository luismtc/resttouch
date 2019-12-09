import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

const lstAreas = [
  {
    area: 1,
    nombre: 'Area 01',
    mesas: [
      { numero: 1, posx: 1, posy: 1, tamanio: 48 },
      { numero: 2, posx: 10, posy: 1, tamanio: 48 },
      { numero: 3, posx: 20, posy: 1, tamanio: 48 },
      { numero: 4, posx: 30, posy: 1, tamanio: 48 },
      { numero: 5, posx: 40, posy: 1, tamanio: 48 },
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

  constructor() { }

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

}
