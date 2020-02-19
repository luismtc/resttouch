import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articulo, ArticuloResponse } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  @Input() articulo: Articulo;
  @Output() articuloSvd = new EventEmitter();
  public showArticuloForm: boolean = true;

  constructor(
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
    this.resetArticulo();
  }

  resetArticulo = () => {
    this.articulo = { 
      articulo: null, 
      categoria_grupo: this.articulo.categoria_grupo, 
      presentacion: null, 
      descripcion: null, 
      precio: null
    };
  }

  setArticuloCategoriaGrupo = (idcatgrp: number) => this.articulo.categoria_grupo = +idcatgrp; 

  onSubmit = () => {
    //console.log(this.articulo);
    this.articuloSrvc.saveArticulo(this.articulo).subscribe(res => {
      //console.log(res);
      if (res.exito) {
        this.articuloSvd.emit();
        this.resetArticulo();
        this.articulo = res.articulo;
      }
    });
  }

}
