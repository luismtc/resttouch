import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { TipoCompraVenta } from '../../../interfaces/tipo-compra-venta';
import { TipoCompraVentaService } from '../../../services/tipo-compra-venta.service';

@Component({
  selector: 'app-form-tipo-compra-venta',
  templateUrl: './form-tipo-compra-venta.component.html',
  styleUrls: ['./form-tipo-compra-venta.component.css']
})
export class FormTipoCompraVentaComponent implements OnInit {

  @Input() tipoCompraVenta: TipoCompraVenta;
  @Output() tipoCompraVentaSavedEv = new EventEmitter();
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private snackBar: MatSnackBar,
    private tipoCompraVentaSrvc: TipoCompraVentaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  resetTipoCompraVenta() {
    this.tipoCompraVenta = { tipo_compra_venta: null, descripcion: null, abreviatura: null, codigo: null };
  }

  onSubmit() {
    this.tipoCompraVentaSrvc.save(this.tipoCompraVenta).subscribe((res) => {
      if (res) {
        this.resetTipoCompraVenta();
        this.tipoCompraVentaSavedEv.emit();
        this.snackBar.open('Grabado con éxito.', 'Tipo de compra/venta', { duration: 5000 });
      }
    });
  }

}
