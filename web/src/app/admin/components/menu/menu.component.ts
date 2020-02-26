import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { NodoAppMenu } from '../../interfaces/acceso-usuario';
import { AppMenuService } from '../../services/app-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() public elementClicked = new EventEmitter();
  
  treeControl = new NestedTreeControl<NodoAppMenu>(node => node.hijos);
  dataSource = new MatTreeNestedDataSource<NodoAppMenu>();
  public opciones: NodoAppMenu[] = [];

  constructor(
    private appMenuSrvc: AppMenuService
  ) { }

  ngOnInit() {
    this.appMenuSrvc.getOpciones().subscribe((res: NodoAppMenu[]) => {
      //console.log('MENU = ', res);
      this.opciones = res;
      this.dataSource.data = this.opciones;
    });
  }

  itemClicked() {
    this.elementClicked.emit();
  }

  hasChild = (_: number, node: NodoAppMenu) => !!node.hijos && node.hijos.length > 0;

  tieneHijos = (node: NodoAppMenu) => !!node.hijos && node.hijos.length > 0;

  onProductoClicked(opc: NodoAppMenu) {
    //this.productoClickedEv.emit(producto);
  }

}
