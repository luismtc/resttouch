import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';
import { ConfiguraMesaComponent } from '../configura-mesa/configura-mesa.component';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

import { Mesa } from '../../../interfaces/mesa';
// import { Impresora } from '../../../../admin/interfaces/impresora';

import { MesaService } from '../../../services/mesa.service';
// import { ImpresoraService } from '../../../../admin/services/impresora.service';

@Component({
  selector: 'app-area-designer',
  templateUrl: './area-designer.component.html',
  styleUrls: ['./area-designer.component.css']
})
export class AreaDesignerComponent implements OnInit {

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  public mesas: Mesa[] = [];
  public contextMenuPosition = { x: '0px', y: '0px' };
  // public impresoras: Impresora[] = [];
  public cargando = false;

  constructor(
    private snackBar: MatSnackBar,
    private mesaSrvc: MesaService,
    public dialogRef: MatDialogRef<AreaDesignerComponent>,
    public dialog: MatDialog,
    // public impresoraSrvc: ImpresoraService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    // console.log(this.data);
    this.mesas = this.data.mesas;
    // console.log(this.mesas);
    // this.loadImpresoras();
  }

  // loadImpresoras = () => this.impresoraSrvc.get().subscribe(res => this.impresoras = res);

  getNextTableNumber = () =>
    this.mesas.length > 0 ?
      (this.mesas.reduce((max, p) => +p.numero > max ? +p.numero : max, (!!this.mesas[0].numero ? +this.mesas[0].numero : 0)) + 1) :
      1

  addTable = (w = 72, h = 72, esmostrador = 0, vertical = 0, escallcenter = 0) => {
    this.cargando = true;
    this.mesas.push({
      mesa: null,
      area: this.data.area,
      numero: this.getNextTableNumber(),
      posx: 1,
      posy: 1,
      tamanio: 72,
      estatus: 1,
      ancho: w,
      alto: h,
      esmostrador,
      vertical,
      escallcenter
    });
    this.saveNewMesa(this.mesas[this.mesas.length - 1], this.mesas.length - 1);
  }

  addMostrador = (esVertical = false) => this.addTable((esVertical ? 72 : 144), (esVertical ? 144 : 72), 1, (esVertical ? 1 : 0));

  addCallCenter = () => this.addTable(72, 72, 1, 0, 1);

  saveNewMesa = (mesa: Mesa, pos: number) => {
    this.mesaSrvc.save(mesa).subscribe(res => {
      if (res.exito) {
        if (!!res.mesa) {
          this.mesas[pos] = res.mesa;
        }
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Mesa', { duration: 7000 });
      }
      this.cargando = false;
    });
  }

  onClickMesa = (obj: any) => { };

  terminar = () => this.dialogRef.close(this.mesas);

  onContextMenu(event: MouseEvent, item: Mesa) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  configurarMesa = (item: Mesa) => {
    const configMesaRef = this.dialog.open(ConfiguraMesaComponent, {
      width: '50%',
      data: { mesa: item }
    });

    configMesaRef.afterClosed().subscribe(res => {

    });
  }

  toggleDeBaja = (item: Mesa, deBaja = 1) => {
    const confBajaMesa = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel(
        +item.esmostrador === 0 ? 'Mesa' : 'Mostrador',
        `¿Seguro que desea ${
        deBaja === 1 ? 'dar de baja' : 'habilitar'
        } ${+item.esmostrador === 0 ? 'la mesa' : 'el mostrador'} #${item.numero}?`,
        'Sí', 'No'
      )
    });

    confBajaMesa.afterClosed().subscribe((conf: boolean) => {
      if (conf) {
        item.debaja = deBaja;
        this.mesaSrvc.save(item).subscribe(res => {
          if (res.exito) {
            if (!!res.mesa) {
              const idx = this.mesas.findIndex(m => +m.mesa === +res.mesa.mesa);
              if (idx > -1) {
                this.mesas[idx] = res.mesa;
              }
              this.snackBar.open(res.mensaje, 'Mesa', { duration: 3000 });
            }
          } else {
            this.snackBar.open(`ERROR: ${res.mensaje}`, 'Mesa', { duration: 7000 });
          }
        });
      }
    });
  }
}
