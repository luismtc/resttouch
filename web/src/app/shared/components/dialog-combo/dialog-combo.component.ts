import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ArticuloService} from '../../../wms/services/articulo.service'

export class ConfirmDialogComboModel {
  constructor(
    public producto: any,
    public lblBtnConfirm: string,
    public lblBtnDeny: string
  ) { }
}

@Component({
  selector: 'app-dialog-combo',
  templateUrl: './dialog-combo.component.html',
  styleUrls: ['./dialog-combo.component.css']
})
export class DialogComboComponent implements OnInit {

  public title: string;
  public message: string;
  public lblBtnConfirm: string;
  public lblBtnDeny: string;
  public datos: any;
  public producto: any;
  public combo: any[] = [];
  public seleccion: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComboComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogComboModel,
    private articuloSvr: ArticuloService
  ) { 
    this.datos = {
      respuesta: false,
      seleccion: []
    }
    this.lblBtnConfirm = data.lblBtnConfirm
    this.lblBtnDeny = data.lblBtnDeny
    this.producto = data.producto
    this.seleccion = {
      articulo: this.producto.id,
      descripcion: this.producto.nombre,
      receta:[]
    }
  }

  ngOnInit() {
    this.getArticulos();
  }

  getArticulos = () => {
    let fltr : any = {
      articulo: this.producto.id
    } 
    this.articuloSvr.getArticuloCombo(fltr).subscribe((res) => {
      this.combo = res
      for (let i = 0; i < this.combo.length; i++) {
        const element = this.combo[i];
        this.combo[i].seleccionado = false;
        for (let j = 0; j < this.combo[i].receta.length; j++) {
          this.combo[i].receta[j].seleccionado = false;
        }
      }
    });
  }

  addProductoMulti(receta:any, producto:any) {
    let detalle = {
      articulo: receta.articulo,
      descripcion: receta.descripcion,
      receta: []
    }
    const idx = this.seleccion.receta
        .findIndex(p => +p.articulo === +receta.articulo);
    
    const idrec = receta.receta.findIndex(o=> +o.articulo === +producto.articulo)

    if(idrec >= 0) {
      var item = receta.receta[idrec];
      receta.receta[idrec].seleccionado = !receta.receta[idrec].seleccionado;
      
      if(idx < 0){
        detalle.receta.push(item)
        this.seleccion.receta.push(detalle);
      } else {
        if(receta.receta[idrec].seleccionado){
          this.seleccion.receta[idx].receta.push(item)
        } else {
          var id = this.seleccion.receta[idx].receta.findIndex(p=>+p.articulo===+item.articullo);
          this.seleccion.receta[idx].receta.splice(id,1);
        }
        
      }
    }
  }

  addProducto(receta: any) {
    const idx = this.seleccion.receta
        .findIndex(p => +p.articulo === +receta.articulo);
    
    if(idx < 0){
      receta.seleccionado = true;
      this.seleccion.receta.push(receta)
    }    
    
  }

  onConfirm(): void {
    this.datos.respuesta = true;
    this.datos.seleccion = this.seleccion;
    this.dialogRef.close(this.datos);
  }

  onDismiss(): void {
    this.datos.respuesta = false;
    this.dialogRef.close(this.datos);
  }

}

