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
    estatus: 1,
    ancho: null,
    alto: null,
    esmostrador: 0,
    vertical: 0,
    etiqueta: null,
    escallcenter: 0
  };
  @Input() dontAllowDrag = true;
  @Input() isDisabled = false;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickMesa = new EventEmitter();
  @ViewChild('divMesa') divMesa: ElementRef;

  public objMesa: HTMLElement;
  public urlImage = '/assets/img/mesas/';

  constructor(
    private snackBar: MatSnackBar,
    private mesaSrvc: MesaService
  ) { }

  ngOnInit() {
    if (+this.configuracion.esmostrador === 0) {
      this.urlImage += 'table_03.svg';
    } else {
      if (+this.configuracion.escallcenter === 0) {
        if (+this.configuracion.vertical === 0) {
          this.urlImage += 'mostrador_horizontal.svg';
        } else {
          this.urlImage += 'mostrador_vertical.svg';
        }
      } else {
        this.urlImage += 'callcenter.svg';
      }
    }
    // console.log(this.configuracion, this.urlImage);
  }

  ngAfterViewInit = () => this.objMesa = this.divMesa.nativeElement;

  clickMesa = () => this.onClickMesa.emit({ mesaSelected: this.configuracion });

  getAncho = () => {
    if (this.configuracion.ancho && +this.configuracion.ancho > 0) {
      return this.configuracion.ancho;
    }
    return this.configuracion.tamanio;
  }

  getAlto = () => {
    if (this.configuracion.alto && +this.configuracion.alto > 0) {
      return this.configuracion.alto;
    }
    return this.configuracion.tamanio;
  }

  dragEnded = (obj: any) => {
    // console.log('Drag ended = ', obj);
    const item = obj.source.element.nativeElement;
    // console.log('HTML ITEM: ', item);
    const parentSize = { x: item.offsetParent.scrollWidth, y: item.offsetParent.scrollHeight };
    // console.log('Parent Size = ', parentSize);
    const distancia = obj.distance;
    // console.log('Distancia = ', distancia);
    const updMesa: Mesa = {
      mesa: this.configuracion.mesa,
      area: this.configuracion.area,
      numero: this.configuracion.numero,
      posx: Math.abs((item.offsetLeft + distancia.x) * 100 / parentSize.x),
      posy: Math.abs((item.offsetTop + distancia.y) * 100 / parentSize.y),
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

  moviendo = (obj: any) => {
    // console.log(obj);
  }
}
