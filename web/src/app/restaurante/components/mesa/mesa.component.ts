import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit, AfterViewInit {

  @Input() configuracion: any = {
    mesa: 0,
    area: 0,
    numero: 0,
    posx: 0.0000,
    posy: 0.0000,
    tamanio: 48,
    estatus: 1
  };
  @Input() dontAllowDrag: boolean = true;
  @Output() onClickMesa = new EventEmitter();
  @ViewChild('divMesa', { static: false }) divMesa: ElementRef;

  public objMesa: HTMLElement;

  constructor(
    private snackBar: MatSnackBar,
    private mesaSrvc: MesaService
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.objMesa = this.divMesa.nativeElement;
  }

  clickMesa() {
    this.onClickMesa.emit({ mesaSelected: this.configuracion });
  }

  dragEnded = (obj: any) => {
    console.log('Drag ended = ', obj);
    const item = obj.source.element.nativeElement;
    const parentSize = { x: item.offsetParent.scrollWidth, y: item.offsetParent.scrollHeight };
    console.log(`x = ${this.objMesa.offsetLeft}\ny = ${this.objMesa.offsetTop}`);
    console.log('Parent Size = ', parentSize);
    const distancia = obj.distance;
    console.log('Distancia = ', distancia);
    const updMesa: Mesa = {
      mesa: this.configuracion.mesa,
      area: this.configuracion.area,
      numero: this.configuracion.numero,
      posx: (item.offsetLeft + distancia.x) * 100 / parentSize.x,
      posy: (item.offsetTop + distancia.y) * 100 / parentSize.y,
      tamanio: this.configuracion.tamanio,
      estatus: this.configuracion.estatus
    };
    // console.log(updMesa);
    this.mesaSrvc.save(updMesa).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        if (!!res.mesa) {
          this.configuracion.mesa = res.mesa.mesa;
          this.snackBar.open(`Mesa #${res.mesa.numero} actualizada...`, 'Diseño de área', { duration: 3000 });
        } else {
          this.snackBar.open(`Mesa #${this.configuracion.numero} actualizada...`, 'Diseño de área', { duration: 3000 });
        }
      } else {
        this.snackBar.open(`ERROR:${res.mensaje}.`, 'Diseño de área', { duration: 3000 });
      }
    });
  }
}
