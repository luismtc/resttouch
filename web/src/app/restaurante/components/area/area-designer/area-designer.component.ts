import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Mesa } from '../../../interfaces/mesa';

@Component({
  selector: 'app-area-designer',
  templateUrl: './area-designer.component.html',
  styleUrls: ['./area-designer.component.css']
})
export class AreaDesignerComponent implements OnInit {

  public mesas: Mesa[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AreaDesignerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    // console.log(this.data);
    this.mesas = this.data.mesas;
    // console.log(this.mesas);
  }

  getNextTableNumber = () => this.mesas.length > 0 ? (this.mesas.reduce((max, p) => +p.numero > max ? +p.numero : max, (!!this.mesas[0].numero ? +this.mesas[0].numero : 0)) + 1) : 1;

  addTable = () => {
    this.mesas.push({
      mesa: null,
      area: this.data.area,
      numero: this.getNextTableNumber(),
      posx: 1,
      posy: 1,
      tamanio: 72,
      estatus: 1
    });
  }

  onClickMesa = (obj: any) => { }

  terminar = () => {
    // console.log(this.mesas);
    this.dialogRef.close(this.mesas);
  }

}
