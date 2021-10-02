import { Component, OnInit, Input } from '@angular/core';

import { DetalleCuentaSimplified } from '../../interfaces/cuenta';

@Component({
  selector: 'app-producto-comanda-alt',
  templateUrl: './producto-comanda-alt.component.html',
  styleUrls: ['./producto-comanda-alt.component.css']
})
export class ProductoComandaAltComponent implements OnInit {

  @Input() detalle: DetalleCuentaSimplified[] = [];
  @Input() paddingLeft = '10px';

  constructor() { }

  ngOnInit(): void {
  }

}
