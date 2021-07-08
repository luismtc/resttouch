import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { VendorTercero } from '../../../interfaces/vendor-tercero';
import { ComandaOrigen } from '../../../interfaces/comanda-origen';
import { VendorTerceroService } from '../../../services/vendor-tercero.service';
import { ComandaOrigenService } from '../../../services/comanda-origen.service';

import { FormSedeVendorTerceroComponent } from '../form-sede-vendor-tercero/form-sede-vendor-tercero.component';

@Component({
  selector: 'app-form-vendor-tercero',
  templateUrl: './form-vendor-tercero.component.html',
  styleUrls: ['./form-vendor-tercero.component.css']
})
export class FormVendorTerceroComponent implements OnInit {

  @Input() vendorTercero: VendorTercero;
  @Output() vendorTerceroSavedEv = new EventEmitter();
  @ViewChild('frmSedeVendorTercero') frmSedeVendorTercero: FormSedeVendorTerceroComponent;
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;
  public lstComandaOrigen: ComandaOrigen[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private vendorTerceroSrvc: VendorTerceroService,
    private comandaOrigenSrvc: ComandaOrigenService,
    private ls: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadComandaOrigen();
  }

  loadComandaOrigen = () => {
    this.comandaOrigenSrvc.get().subscribe(res => {
      if (res) {
        this.lstComandaOrigen = res;
      }
    });
  }

  resetVendorTercero() {
    this.vendorTercero = { vendor_tercero: null, nombre: null, comanda_origen: null };
    this.frmSedeVendorTercero.resetSedeVendorTercero();
  }

  onSubmit() {
    this.vendorTerceroSrvc.save(this.vendorTercero).subscribe((res) => {
      if (res.exito) {
        this.resetVendorTercero();
        this.vendorTerceroSavedEv.emit();
        this.snackBar.open(res.mensaje, 'Vendor', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Vendor', { duration: 7000 });
      }
    });
  }
}
