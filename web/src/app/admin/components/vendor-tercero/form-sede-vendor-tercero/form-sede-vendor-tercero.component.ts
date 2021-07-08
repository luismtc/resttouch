import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Sede } from '../../../interfaces/sede';
import { SedeVendorTercero } from '../../../interfaces/vendor-tercero';
import { SedeService } from '../../../services/sede.service';
import { VendorTerceroService } from '../../../services/vendor-tercero.service';

@Component({
  selector: 'app-form-sede-vendor-tercero',
  templateUrl: './form-sede-vendor-tercero.component.html',
  styleUrls: ['./form-sede-vendor-tercero.component.css']
})
export class FormSedeVendorTerceroComponent implements OnInit {

  public sedeVendorTercero: SedeVendorTercero;
  public lstSedes: Sede[] = [];

  constructor(
    private sedeSrvc: SedeService,
    private snackBar: MatSnackBar,
    private vendorTerceroSrvc: VendorTerceroService
  ) {
    this.sedeVendorTercero = { sede_vendor_tercero: null, sede: null, vendor_tercero: null };
  }

  ngOnInit(): void {
    this.loadSedes();
  }

  loadSedes = () => {
    this.sedeSrvc.get().subscribe(res => {
      if (res) {
        this.lstSedes = res;
      }
    });
  }  

  resetSedeVendorTercero = () => this.sedeVendorTercero = { sede_vendor_tercero: null, sede: null, vendor_tercero: null };

  onSubmit() {
    this.vendorTerceroSrvc.saveSedeVendorTercero(this.sedeVendorTercero).subscribe((res) => {
      if (res.exito) {        
        this.snackBar.open(res.mensaje, 'Sede de vendor', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Sede de vendor', { duration: 7000 });
      }
    });    
  }

  getSedeVendorTercero = () => {    
    if (+this.sedeVendorTercero.vendor_tercero > 0) {
      this.vendorTerceroSrvc.getSedeVendorTercero({ vendor_tercero: +this.sedeVendorTercero.vendor_tercero }).subscribe(res => {
        if (res && res.length > 0) {
          this.sedeVendorTercero = res[0];
          console.log('SEDE VENDOR TERCERO = ', this.sedeVendorTercero);
        }
      });
    }
  }
}
