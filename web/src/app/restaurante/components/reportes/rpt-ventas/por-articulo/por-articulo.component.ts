import { Component, OnInit, Input } from '@angular/core';

// import { PorArticulo } from '../../../../interfaces/reporte-ventas';

@Component({
  selector: 'app-por-articulo',
  templateUrl: './por-articulo.component.html',
  styleUrls: ['./por-articulo.component.css']
})
export class PorArticuloComponent implements OnInit {

  @Input() params: any = {};
  @Input() data: any = {};

  constructor() { }

  ngOnInit() {
  }

}
