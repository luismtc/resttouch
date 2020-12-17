import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaCertificadorConfiguracionComponent } from '../lista-certificador-configuracion/lista-certificador-configuracion.component';
import { FormCertificadorConfiguracionComponent } from '../form-certificador-configuracion/form-certificador-configuracion.component';
import { Configuracion } from '../../../../interfaces/certificador';

@Component({
  selector: 'app-certificador-configuracion',
  templateUrl: './certificador-configuracion.component.html',
  styleUrls: ['./certificador-configuracion.component.css']
})
export class CertificadorConfiguracionComponent implements OnInit {

  public certificador: Configuracion;
  @ViewChild('lstCertificador', { static: false }) lstCertificadorComponent: ListaCertificadorConfiguracionComponent;
	@ViewChild('frmCertificador', { static: false }) frmCertificador: FormCertificadorConfiguracionComponent;

	constructor() {
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

  ngOnInit() {
  }

  setCertificador = (conf: Configuracion) => {
		this.certificador = conf;
  }
  
	refreshCertificadorList = () => this.lstCertificadorComponent.loadCertificador();

}
