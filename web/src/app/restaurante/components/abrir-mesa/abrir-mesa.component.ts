import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  mesero: string;
  comensales: string;
  esEvento: boolean;
  dividirCuentasPorSillas: boolean;
}

@Component({
  selector: 'app-abrir-mesa',
  templateUrl: './abrir-mesa.component.html',
  styleUrls: ['./abrir-mesa.component.css']
})
export class AbrirMesaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AbrirMesaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  cancelar(){
    this.dialogRef.close();    
  }

}
