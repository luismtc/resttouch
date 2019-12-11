import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  @Input() numero: number = 0;
  @Input() configuracion: any = {
    numero: 0,
    tamanio: '48',
    posx: '0%',
    posy: '0%'
  };

  @Output() onClickMesa = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickMesa() {
    this.onClickMesa.emit({ mesaSelected: this.configuracion });
  }

}
