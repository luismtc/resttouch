import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GLOBAL } from '../../global';
import { LocalstorageService } from '../../../admin/services/localstorage.service';

import { ArticuloResponse } from '../../../wms/interfaces/articulo';
import { ArticuloService } from '../../../wms/services/articulo.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-extra-producto',
  templateUrl: './extra-producto.component.html',
  styleUrls: ['./extra-producto.component.css']
})
export class ExtraProductoComponent implements OnInit, OnDestroy {

  public extras: ArticuloResponse[] = [];

  private endSubs = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<ExtraProductoComponent>,
    private articuloSrc: ArticuloService ,
    private ls: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.loadArticulosExtras();
  }

  ngOnDestroy(): void {
    this.endSubs.unsubscribe();
  }

  loadArticulosExtras = () => {
    this.endSubs.add(
      this.articuloSrc.getArticulo({esextra: 1, debaja: 0, _sede: this.ls.get(GLOBAL.usrTokenVar).sede}).subscribe(res => this.extras = res)
    );
  }

  terminar = () => this.dialogRef.close();

}
