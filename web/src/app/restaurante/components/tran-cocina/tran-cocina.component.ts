import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { DesktopNotificationService } from '../../../shared/services/desktop-notification.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';

import { ComandaService } from '../../services/comanda.service';

@Component({
  selector: 'app-tran-cocina',
  templateUrl: './tran-cocina.component.html',
  styleUrls: ['./tran-cocina.component.css']
})
export class TranCocinaComponent implements OnInit {

  public lstComandasCocina: any[] = [];
  public lstComandasCocinaEnProceso: any[] = [];

  constructor(
    private ls: LocalstorageService,
    private comandaSrvc: ComandaService,
    private socket: Socket,
    private dns: DesktopNotificationService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    if (!!this.ls.get(GLOBAL.usrTokenVar).sede_uuid) {
      this.socket.emit('joinRestaurant', this.ls.get(GLOBAL.usrTokenVar).sede_uuid);

      this.socket.on('refrescar:listaCocina', () => {
        this.loadComandasCocina();
        this.notificarUsuario();
      });

    }
    this.loadComandasCocina();
  }

  notificarUsuario = () => {
    const opciones: NotificationOptions = {
      icon: 'assets/img/minilogo.png',
      body: `Se recibió una nueva orden a las ${moment().format(GLOBAL.dateTimeFormat)}.`,
      dir: 'auto'
    };
    this.dns.createNotification('Rest-Touch Pro', 10000, opciones);
  }

  loadComandasCocina = () => this.comandaSrvc.getComandasCocina().subscribe(res => {
    this.lstComandasCocina = res.pendientes;
    this.lstComandasCocinaEnProceso = res.enproceso;
  })

  setCocinado = (cmd: any, estatus = 2) => {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel(
        'Cocina',
        `¿Seguro de marcar como '${+estatus === 1 ? 'vista' : 'cocinada'}' la comanda #${cmd.comanda}?`,
        'Sí', 'No'
      )
    });

    confirmRef.afterClosed().subscribe((conf: boolean) => {
      if (conf) {
        this.comandaSrvc.setComandaCocinada(+cmd.comanda, estatus).subscribe((res: any) => {
          if (res.exito) {
            this.snackBar.open(res.mensaje, 'Cocina', { duration: 3000 });
          } else {
            this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cocina', { duration: 7000 });
          }
          this.loadComandasCocina();
        });
      }
    });
  }

}
