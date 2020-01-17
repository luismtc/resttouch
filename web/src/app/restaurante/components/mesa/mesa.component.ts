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

}
