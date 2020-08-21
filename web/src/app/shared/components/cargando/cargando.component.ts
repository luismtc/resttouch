import { Component, OnInit, Input } from '@angular/core';

interface IConfiguracion {
  w: number;
  h: number;
  align: string;
  size: number;
}

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css']
})
export class CargandoComponent implements OnInit {

  @Input() configuracion: IConfiguracion = { w: 150, h: 150, align: 'center', size: 100 };

  constructor() { }

  ngOnInit() {
  }

}
