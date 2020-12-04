import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inventario-fisico',
  templateUrl: './form-inventario-fisico.component.html',
  styleUrls: ['./form-inventario-fisico.component.css']
})
export class FormInventarioFisicoComponent implements OnInit {

  public showForm = true;
  public params: any = {};

  constructor() { }

  ngOnInit() {
  }

}
