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
    console.log(this.mesas);
  }

  getNextTableNumber = () => this.mesas.length > 0 ? (this.mesas.reduce((max, p) => +p.numero > max ? +p.numero : max, (!!this.mesas[0].numero ? +this.mesas[0].numero : 0)) + 1) : 1;

  addTable = () => {
    this.mesas.push({
      mesa: null,
      area: this.data.area,
      numero: this.getNextTableNumber(),
      posx: 5,
      posy: 5,
      tamanio: 72,
      estatus: 1
    });
  }

  onClickMesa = (obj: any) => { }

  dragEnded = (obj: any) => {
    console.log(obj);
    try {
      const noMesa: number = +obj.source.element.nativeElement.id;
      if (noMesa > 0) {
        const idxMesaMoved = this.mesas.findIndex(m => +m.numero === noMesa);
        if (idxMesaMoved >= 0) {
          const posXActual = (this.mesas[idxMesaMoved].posx * 750 / 100) + obj.distance.x;
          const posYActual = (this.mesas[idxMesaMoved].posy * 600 / 100) + obj.distance.y;
          this.mesas[idxMesaMoved].posx = posXActual * 100 / 750;
          this.mesas[idxMesaMoved].posy = posYActual * 100 / 600;
          this._snackBar.open(`Posición de mesa #${noMesa} actualizada...`, 'Diseño', { duration: 3000 });      
        }
      }
    } catch(e) {
      this._snackBar.open(`ERROR: ${e}`, 'Diseño', { duration: 3000 });      
    }    
  }

  terminar = () => {
    console.log(this.mesas);
    //this.dialogRef.close(this.mesas);
  }

}
