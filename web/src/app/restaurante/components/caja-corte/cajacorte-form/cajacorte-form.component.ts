import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ccGeneral, ccDetalle, ccTipo, ccNominacion } from '../../../interfaces/cajacorte';
import { CajacorteService } from '../../../services/cajacorte.service';

@Component({
  selector: 'app-cajacorte-form',
  templateUrl: './cajacorte-form.component.html',
  styleUrls: ['./cajacorte-form.component.css']
})
export class CajacorteFormComponent implements OnInit {

  @Input() ccorte: ccGeneral;
  @Output() cajacorteSavedEv = new EventEmitter();
  public ccorteTipo: ccTipo[] = [];
  public ccorteNomi: ccNominacion[] = [];

  public detalle = {
    caja_corte_detalle: 0,
    caja_corte: 0,
    cantidad: 0,
    total: 0,
    anulado: 0,
    caja_corte_nominacion: 0,
    nombre: null
  };

  constructor(
    private _snackBar: MatSnackBar,
    private cajacorteSrvc: CajacorteService
  ) {}

  ngOnInit() {
    this.getCajaCorteTipo();
    this.getCajaCorteNominacion();
  }

  getCajaCorteTipo = () => {
    this.cajacorteSrvc.getCajaCorteTipo().subscribe(res => {
      this.ccorteTipo = res;
    });
  }

  getCajaCorteNominacion = () => {
    this.cajacorteSrvc.getCajaCorteNominacion().subscribe(res => {
      this.ccorteNomi = res;
    });
  }

  setTotal = () => {
    if (this.detalle.caja_corte_nominacion) {
      let tmp = this.ccorteNomi.filter(o => {
        return o.caja_corte_nominacion == this.detalle.caja_corte_nominacion;
      })[0];

      if (tmp.calcula == 1) {
        this.detalle.total = this.detalle.cantidad*tmp.valor;
      } else {
        this.detalle.total = this.detalle.cantidad;
      }
    }
  }

  setNamenomi = () => {
    let tmp = this.ccorteNomi.filter(o => {
      return o.caja_corte_nominacion == this.detalle.caja_corte_nominacion;
    })[0];
    console.log(tmp,  this.detalle.caja_corte_nominacion);
    this.detalle.nombre = tmp.nombre;
  }

  setNameTipo = () => {
    let tmp = this.ccorteTipo.filter(o => {
      return o.caja_corte_tipo == this.ccorte.caja_corte_tipo;
    })[0];
    console.log(tmp, this.ccorte.caja_corte_tipo);

    this.ccorte.descripcion = tmp.descripcion;
  }

  reseteGeneral = () => this.ccorte = {
    caja_corte: 0,
    creacion: null,
    usuario: 0,
    turno: 0,
    confirmado: null,
    anulado: 0,
    caja_corte_tipo: 0,
    descripcion: null,
    detalle: []
  }

  resetDetalle = () => this.detalle = {
    caja_corte_detalle: 0,
    caja_corte: 0,
    cantidad: 0,
    total: 0,
    anulado: 0,
    caja_corte_nominacion: 0,
    nombre: null
  }

  agregarDetalle = () => {
    if (this.detalle.caja_corte_nominacion && 
      this.detalle.cantidad &&
      this.detalle.total) {

      this.ccorte.detalle.push(this.detalle);
      this.resetDetalle();
    } else {
      this._snackBar.open(`Complete los datos de nominaciones`, 'Corte de caja', { duration: 3000 });
    }
  }

  guardar = () => {
    if (confirm('¿Está seguro?')) {

      if (this.ccorte.detalle.length == 0) {
        this._snackBar.open(`Por favor agregue las nominaciones`, 'Corte de caja', { duration: 3000 });
        return false;
      }

      if (!this.ccorte.caja_corte_tipo) {
        this._snackBar.open(`Seleccione el tipo de corte de caja.`, 'Corte de caja', { duration: 3000 });
        return false;
      }

      this.cajacorteSrvc.guardar(this.ccorte).subscribe(res => {
        if (res.exito) {
          this.cajacorteSavedEv.emit();
          this.reseteGeneral();
        }
        this._snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
      });
    }
  }

  anularCajaDetalle = (obj: ccDetalle) => {
    if (confirm('¿Está seguro.?')) {
      if (obj.caja_corte_detalle) {
        this.cajacorteSrvc.anularDetalle(obj).subscribe(res => {
          if (res.exito) {
            let key = this.ccorte.detalle.indexOf(obj);
            this.ccorte.detalle.splice(key,1);
          }
          this._snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
        });
      } else {
        let key = this.ccorte.detalle.indexOf(obj);
        this.ccorte.detalle.splice(key,1);
      }
    }
  }
}
    
