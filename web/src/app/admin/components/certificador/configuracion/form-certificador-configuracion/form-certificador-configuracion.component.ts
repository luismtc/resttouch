import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Configuracion } from '../../../../interfaces/certificador';
import { CertificadorService } from '../../../../services/certificador.service';

@Component({
  selector: 'app-form-certificador-configuracion',
  templateUrl: './form-certificador-configuracion.component.html',
  styleUrls: ['./form-certificador-configuracion.component.css']
})
export class FormCertificadorConfiguracionComponent implements OnInit {

  @Input() certificador: Configuracion;
  @Output() certificadorSavedEv = new EventEmitter();

  constructor(
    private _snackBar: MatSnackBar,
    private certificadorSrvc: CertificadorService
  ) { }

  ngOnInit() {
    this.resetCertificador();
  }
  
  resetCertificador = () => {
		this.certificador = {
      certificador_configuracion: null,
			nombre: null,
      vinculo_factura: null,
      vinculo_firma: null,
      metodo_factura: null,
      vinculo_anulacion: null,
      metodo_anulacion: null,
      vinculo_grafo: null,
      metodo_grafo: null
		};
	}

  	onSubmit = () => {
  		this.certificadorSrvc.saveConfig(this.certificador).subscribe(res => {
  			if (res.exito) {
          this.certificadorSavedEv.emit();
  				this.resetCertificador();  				
  				this._snackBar.open('Certificador guardado con éxito...', 'Certificador', { duration: 3000 });
  			} else {
  				this._snackBar.open(`ERROR: ${res.mensaje}`, 'Sede Usuario', { duration: 3000 });
  			}
  		})
  	}

}
