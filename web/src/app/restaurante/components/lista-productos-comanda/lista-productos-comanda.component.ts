import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface productoSelected {
  id: number;
  nombre: string;
  noCuenta?: number;
  cantidad: number;
  impreso: boolean;
  precio?: number;
  notas?: string;
  showInputNotas: boolean;
  itemListHeight: string;
}

@Component({
  selector: 'app-lista-productos-comanda',
  templateUrl: './lista-productos-comanda.component.html',
  styleUrls: ['./lista-productos-comanda.component.css']
})
export class ListaProductosComandaComponent implements OnInit {

  @Input() listaProductos: productoSelected[] = [];
  @Input() noCuenta: number = null;
  @Input() listHeight: string = '450px';
  @Output() productoRemovedEv = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeProducto = (p: productoSelected, idx: number) => {
    if (p.cantidad > 1) {
      p.cantidad--;
      this.productoRemovedEv.emit(this.listaProductos);
    } else {
      this.deleteProductoFromList(idx);
    }
  }

  deleteProductoFromList = (idx: number) => {
    this.listaProductos.splice(idx, 1);
    this.productoRemovedEv.emit(this.listaProductos);
  }

  toggleShowInputNotas(p: productoSelected) {
    p.showInputNotas = !p.showInputNotas;
    if(p.showInputNotas){
      p.itemListHeight = '140px';
    } else {
      p.itemListHeight = '70px';      
    }
  }

  doAction(ev: string) {
    console.log(ev);
  }

}
