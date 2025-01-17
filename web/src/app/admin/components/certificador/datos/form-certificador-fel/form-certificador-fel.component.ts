import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { GLOBAL } from '../../../../../shared/global'
import { Configuracion, Certificador } from '../../../../interfaces/certificador';
import { CertificadorService } from '../../../../services/certificador.service';

@Component({
  selector: 'app-form-certificador-fel',
  templateUrl: './form-certificador-fel.component.html',
  styleUrls: ['./form-certificador-fel.component.css']
})
export class FormCertificadorFelComponent implements OnInit {

  @Input() certificador: Configuracion;
	@Output() CertificadorSavedEv = new EventEmitter();

  public certificadores: Certificador[] = [];
  public fraseIsr: any[] = GLOBAL.frases_isr;
  public fraseIva: any[] = GLOBAL.frases_iva;
  public registro: Certificador;
  public displayedColumns: string[] = ['usuario', 'llave', 'editItem'];
  public dataSource: MatTableDataSource<Certificador>;

	constructor(
		private _snackBar: MatSnackBar,
    private certificadorSrvc: CertificadorService
	) {
		this.resetCertificador();
	}

  ngOnInit() {
  }

  resetCertificador = () => {
    this.registro = {
      certificador_fel: null,
      llave: null,
      usuario: null,
      firma_llave: null,
      firma_codigo: null,
      firma_alias: null,
      nit: null,
      correo_emisor: null,
      frase_retencion_isr: null,
      frase_retencion_iva: null,
      certificador_configuracion: null
    }
  }
  
  loadCertificadores = (xid: number = +this.certificador.certificador_configuracion) => {
		this.certificadorSrvc.getCertificador({certificador_configuracion:xid}).subscribe((res: any[]) => {
			if (res) {
				this.certificadores = res
				this.updateTableDataSource();
			}
		});
  }
  
  setAcceso = (cert: any) => {
		this.registro =  {
			certificador_fel: +cert.certificador_fel,
      llave: cert.llave,
      usuario: cert.usuario,
      firma_llave: cert.firma_llave,
      firma_codigo: cert.firma_codigo,
      firma_alias: cert.firma_alias,
      nit: cert.nit,
      correo_emisor: cert.correo_emisor,
      frase_retencion_isr: +cert.frase_retencion_isr,
      frase_retencion_iva: +cert.frase_retencion_iva,
      certificador_configuracion: +cert.certificador_configuracion
		};
	}

  	onSubmit = () => {
  		this.registro.certificador_configuracion = this.certificador.certificador_configuracion;

  		this.certificadorSrvc.save(this.registro).subscribe(res => {
  			if (res.exito) {
  				this.resetCertificador();
  				this.loadCertificadores(this.certificador.certificador_configuracion);
  				this._snackBar.open('Certificador guardado con éxito...', 'Certificador', { duration: 3000 });
  			} else {
  				this._snackBar.open(`ERROR: ${res.mensaje}`, 'Certificador', { duration: 3000 });
  			}
  		})
  	}

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.certificadores);

}
