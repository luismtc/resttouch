import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MesaDisponible } from '../../interfaces/mesa';

import { MesaService } from '../../services/mesa.service';
import { ComandaService } from '../../services/comanda.service';

@Component({
  selector: 'app-traslado-mesa',
  templateUrl: './traslado-mesa.component.html',
  styleUrls: ['./traslado-mesa.component.css']
})
export class TrasladoMesaComponent implements OnInit {

  public mesasDisponibles: MesaDisponible[] = [];
  public destino: MesaDisponible;

  constructor(
    public dialogRef: MatDialogRef<TrasladoMesaComponent>,
    private snackBar: MatSnackBar,
    private mesaSrvc: MesaService,
    private comandaSrvc: ComandaService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.loadMesasDisponibles();
  }

  loadMesasDisponibles = () => this.mesaSrvc.getDisponibles().subscribe((res: MesaDisponible[]) => this.mesasDisponibles = res);

  cancelar = () => this.dialogRef.close(false);

  trasladar = () => {
    this.comandaSrvc.trasladarMesa(+this.data.mesaEnUso.comanda, +this.data.mesaEnUso.mesa.mesa, +this.destino.mesa).subscribe(res => {
      if (res.exito) {
        this.snackBar.open(res.mensaje, 'Traslado de mesa', { duration: 3000 });
        this.dialogRef.close(true);
      } else {
        this.snackBar.open(`ERROR:${res.mensaje}`, 'Traslado de mesa', { duration: 7000 });
      }
    });
  }

}
