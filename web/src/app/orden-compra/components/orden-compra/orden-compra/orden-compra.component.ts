import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import { ListaOrdenCompraComponent } from '../lista-orden-compra/lista-orden-compra.component';
import { FormOrdenCompraComponent } from '../form-orden-compra/form-orden-compra.component';
import { OrdenCompra } from '../../../interfaces/orden-compra';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {

  public ordenCompra: OrdenCompra;
  @ViewChild('lstOrdenCompra', { static: false }) lstOrdenCompraComponent: ListaOrdenCompraComponent;
  @ViewChild('frmOrdenCompra', { static: false }) frmOrdenCompra: FormOrdenCompraComponent;

  constructor(
    private ls: LocalstorageService
  ) {
    this.ordenCompra = {
      orden_compra: null, proveedor: null, usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), notas: null, estatus_movimiento: 1, bodega: null, tipo_movimiento: null
    };
  }

  ngOnInit() {
  }

  setOrdenCompra = (oc: OrdenCompra) => {
    //console.log(oc);
    this.ordenCompra = oc;
    this.frmOrdenCompra.loadDetalleOrdenCompra(+this.ordenCompra.orden_compra);
  }

  refreshOrdenCompraList = () => {
    this.lstOrdenCompraComponent.loadOrdenesCompra();
  }

}
