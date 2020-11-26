import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notas-generales-comanda',
  templateUrl: './notas-generales-comanda.component.html',
  styleUrls: ['./notas-generales-comanda.component.css']
})
export class NotasGeneralesComandaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NotasGeneralesComandaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  terminar = (obj: string = null) => this.dialogRef.close(obj);

}
