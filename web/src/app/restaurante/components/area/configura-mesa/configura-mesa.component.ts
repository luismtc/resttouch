import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Mesa } from '../../../interfaces/mesa';
import { Impresora } from '../../../../admin/interfaces/impresora';

import { MesaService } from '../../../services/mesa.service';
import { ImpresoraService } from '../../../../admin/services/impresora.service';

interface IData {
  mesa: Mesa;
}

@Component({
  selector: 'app-configura-mesa',
  templateUrl: './configura-mesa.component.html',
  styleUrls: ['./configura-mesa.component.css']
})
export class ConfiguraMesaComponent implements OnInit {

  public impresoras: Impresora[] = [];
  public mesa: any = {};

  constructor(
    private mesaSrvc: MesaService,
    private impresoraSrvc: ImpresoraService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ConfiguraMesaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IData
  ) { }

  ngOnInit() {
    this.mesa = this.data.mesa;
    this.loadImpresoras();
  }

  loadImpresoras = () => this.impresoraSrvc.get().subscribe(res => this.impresoras = res);

  cancelar = () => this.dialogRef.close(false);

  guardarConfiguracion = () => {
    this.mesaSrvc.save(this.mesa).subscribe(res => {
      if (res.exito) {
        if (!!res.mesa) {
          this.snackBar.open(`Mesa #${res.mesa.numero} actualizada...`, 'Configuración de mesa', { duration: 3000 });
        } else {
          this.snackBar.open(`Mesa #${this.mesa.numero} actualizada...`, 'Configuración de mesa', { duration: 3000 });
        }
      } else {
        this.snackBar.open(`ERROR:${res.mensaje}.`, 'Configuración de mesa', { duration: 7000 });
      }
      this.dialogRef.close(true);
    });
  }
}
