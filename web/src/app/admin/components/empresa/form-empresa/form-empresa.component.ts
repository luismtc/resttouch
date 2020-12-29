import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Corporacion, Empresa } from '../../../interfaces/sede';
import { SedeService } from '../../../services/sede.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  @Input() corporacion: Corporacion;
  @Input() empresa: Empresa;
  @Output() empresaSavedEv = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar,
    private sedeSrvc: SedeService,
  ) { }

  ngOnInit() {
  }

  resetEmpresa = () => this.empresa = {
    empresa: null,
    corporacion: null,
    nombre: null,
    numero_acceso: null,
    afiliacion_iva: null,
    codigo_establecimiento: null,
    correo_emisor: null,
    nit: null,
    nombre_comercial: null,
    direccion: null,
    codigo_postal: null,
    municipio: null,
    departamento: null,
    pais_iso_dos: null,
    agente_retenedor: null,
    porcentaje_iva: null,
    visa_merchant_id: null,
    visa_transaction_key: null,
    codigo: null,
  }

  onSubmit = () => {
    this.empresa.corporacion = this.corporacion.corporacion;

    this.sedeSrvc.saveEmpresa(this.empresa).subscribe(res => {
      if (res.exito) {
        this.empresaSavedEv.emit();
        this.resetEmpresa();
        this.snackBar.open('Empresa guardada exitosamente', 'Empresa', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Empresa', { duration: 3000 });
      }
    });
  }

}
