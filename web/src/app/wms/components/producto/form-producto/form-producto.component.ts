import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

import { Articulo } from '../../../interfaces/articulo';
import { ArticuloDetalle } from '../../../interfaces/articulo-detalle';
import { ArticuloService } from '../../../services/articulo.service';
import { Medida } from '../../../../admin/interfaces/medida';
import { MedidaService } from '../../../../admin/services/medida.service';
import { Presentacion } from '../../../../admin/interfaces/presentacion';
import { PresentacionService } from '../../../../admin/services/presentacion.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  @Input() articulo: Articulo;
  @Output() articuloSvd = new EventEmitter();
  public showArticuloForm: boolean = true;
  public medidas: Medida[] = [];
  public presentaciones: Presentacion[] = [];
  public articulos: Articulo[] = [];
  public recetas: ArticuloDetalle[] = [];
  public receta: ArticuloDetalle;
  public showDetalleForm: boolean = true;
  public displayedColumns: string[] = ['articulo', 'cantidad', 'medida', 'editItem'];
  public dataSource: MatTableDataSource<ArticuloDetalle>;
  public esMovil: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private articuloSrvc: ArticuloService,
    private medidaSrvc: MedidaService,
    private presentacionSrvc: PresentacionService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.resetArticulo();
    this.loadMedidas();
    this.loadArticulos();
    this.loadPresentaciones();
  }

  resetArticulo = () => {
    this.articulo = {
      articulo: null,
      categoria_grupo: this.articulo.categoria_grupo,
      presentacion: null,
      descripcion: null,
      precio: null,
      bien_servicio: 'B'
    };
    this.resetReceta();
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
        this.loadArticulos();
        this._snackBar.open('Articulo guardado con éxito...', 'Articulo', { duration: 3000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Articulo', { duration: 3000 });
      }
    });
  }

  loadMedidas = () => {
    this.medidaSrvc.get().subscribe(res => {
      if (res) {
        this.medidas = res;
      }
    });
  }

  loadPresentaciones = () => {
    this.presentacionSrvc.get().subscribe(res => {
      if (res) {
        this.presentaciones = res;
      }
    });
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
      }
    })
  }

  resetReceta = () => this.receta = {
    articulo_detalle: null, receta: (this.articulo.articulo || 0), racionable: 0, articulo: null, cantidad: 1.00, medida: null
  };

  loadRecetas = (idarticulo: number = +this.articulo.articulo) => {
    this.articuloSrvc.getArticuloDetalle(+idarticulo, { receta: +idarticulo }).subscribe(res => {
      if (res) {
        this.recetas = res;
        this.updateTableDataSource();
      }
    });
  }

  getReceta = (idarticulo: number = +this.articulo.articulo, iddetalle: number) => {
    this.articuloSrvc.getArticuloDetalle(idarticulo, { articulo_detalle: iddetalle }).subscribe((res: any[]) => {
      console.log(res);
      if (res) {
        this.receta = {
          articulo_detalle: res[0].articulo_detalle,
          receta: res[0].receta.articulo,
          racionable: res[0].articulo.articulo,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          medida: res[0].medida.medida
        };
        this.showDetalleForm = true;
      }
    });
  }

  onSubmitDetail = () => {
    this.receta.receta = this.articulo.articulo;
    //console.log(this.articulo);
    //console.log(this.receta); return;
    this.articuloSrvc.saveArticuloDetalle(this.receta).subscribe(res => {
      //console.log(res);
      if (res) {
        this.loadRecetas();
        this.resetReceta();
      }
    });
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.recetas);
}
