import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  @Input() configuracion: any = {
    numero: 0,
    tamanio: 48,
    posx: 0.0000,
    posy: 0.0000
  };

  @Output() onClickMesa = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  clickMesa() {
    this.onClickMesa.emit({ mesaSelected: this.configuracion });
  }

  dragEnded = (obj: any) => {
    // console.log(obj);
    const item = obj.source.element.nativeElement;
    const distancia = obj.distance;
    console.log(`TOP = ${item.offsetTop + distancia.y}\nLEFT = ${item.offsetLeft + distancia.x}`);
    // console.log(this.configuracion);
    this.configuracion.posx = (item.offsetLeft + distancia.x) * 100 / 750;
    this.configuracion.posy = (item.offsetTop + distancia.y) * 100 / 600;
    // console.log(this.configuracion);
  }

}
