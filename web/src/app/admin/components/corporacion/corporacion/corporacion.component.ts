import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ListaCorporacionComponent } from '../lista-corporacion/lista-corporacion.component';
import { ListaEmpresaComponent } from '../../empresa/lista-empresa/lista-empresa.component';
import { ListaSedeComponent } from '../../sede/lista-sede/lista-sede.component';
import { Corporacion, Empresa, Sede } from '../../../interfaces/sede';

@Component({
  selector: 'app-corporacion',
  templateUrl: './corporacion.component.html',
  styleUrls: ['./corporacion.component.css']
})
export class CorporacionComponent implements OnInit {

  public corporacion: Corporacion;
  public empresa: Empresa;
  public sede: Sede;

  @ViewChild('lstCorporacion', { static: false }) lstCorporacionComponent: ListaCorporacionComponent;
  @ViewChild('lstEmpresa', { static: false }) lstEmpresaComponent: ListaEmpresaComponent;
  @ViewChild('lstSede', { static: false }) lstSedeComponent: ListaSedeComponent;

  constructor() { }

  ngOnInit() {
    this.corporacion = {
      corporacion: null, admin_llave: null, nombre: null
    }
    this.resetEmpresa();
    this.resetSede();
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

  resetSede = () => this.sede = {
    sede: null,
    empresa: null,
    sede_padre: null,
    nombre: null,
    certificador_fel: null,
    fel_establecimiento: null,
    direccion: null,
    telefono: null,
    correo: null,
    codigo: null,
    cuenta_contable: null
  }

  onTabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index == 1) {
      this.lstEmpresaComponent.getEmpresas();

    } else if( tabChangeEvent.index == 2) {
      this.lstSedeComponent.getSedes();
    }
  }

  setFormCorporacion = (cli: Corporacion) => {
    this.corporacion = cli;
  }

  setFormEmpresa = (cli: Empresa) => {
    this.empresa = cli
  };

  refreshEmpresaList = () => {
    this.lstEmpresaComponent.getEmpresas();
    this.resetEmpresa;
  }

  refreshCorporacionList = () => {
    this.lstCorporacionComponent.getCorporaciones();
    this.corporacion = {
      corporacion: null, admin_llave: null, nombre: null
    }
  }

  setFormSede = (cli: Sede) => this.sede = cli;
  refreshSedeList = () => this.lstSedeComponent.getSedes();

}
