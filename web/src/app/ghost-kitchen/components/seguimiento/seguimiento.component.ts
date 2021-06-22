import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Socket } from 'ngx-socket-io';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesktopNotificationService } from '../../../shared/services/desktop-notification.service';
import * as moment from 'moment';

import { OrdenGkResponse } from '../../interfaces/orden-gk';
import { OrdenGkService } from '../../services/orden-gk.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SeguimientoComponent implements OnInit {

  public ordenesgk: OrdenGkResponse[] = [];
  public columnsToDisplay = ['orden_gk', 'comanda_origen', 'fhcreacion', 'numero_orden', 'estatus_orden_gk', 'total'];
  public expandedElement: any | null;

  constructor(
    private ordengkSrvc: OrdenGkService,
    private socket: Socket,
    private ls: LocalstorageService,
    private snackBar: MatSnackBar,
    private dns: DesktopNotificationService
  ) { }

  ngOnInit(): void {
    if (!!this.ls.get(GLOBAL.usrTokenVar).sede_uuid) {
      this.socket.emit('joinRestaurant', this.ls.get(GLOBAL.usrTokenVar).sede_uuid);

      this.socket.on('gk:updlista', (obj: any) => {
        if (this.ls.get(GLOBAL.usrTokenVar).sede_uuid.indexOf(obj.corporacion) > -1) {
          this.loadOrdenesGK();
          this.notificarUsuario();
        }
      });

      this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(GLOBAL.usrTokenVar).sede_uuid));

      this.socket.on('connect_timeout', () => {
        const msg = 'DESCONECTADO DEL SERVIDOR (TIMEOUT)';
        this.snackBar.open(msg, 'ERROR', { duration: 5000 });
        // this.avisoSocketIOEvent(msg);
      });

      this.socket.on(
        'reconnect_attempt',
        (attempt: number) => this.snackBar.open(`INTENTO DE RECONEXIÓN #${attempt}`, 'ERROR', { duration: 10000 })
      );
    }

    this.loadOrdenesGK();
  }

  notificarUsuario = () => {
    const opciones: NotificationOptions = {
      icon: 'assets/img/minilogo.png',
      body: `Se recibió una nueva orden a las ${moment().format(GLOBAL.dateTimeFormat)}.`,
      dir: 'auto'
    };
    this.dns.createNotification('Rest-Touch Pro', 10000, opciones);
  }

  loadOrdenesGK = () => {
    this.ordengkSrvc.seguimiento().subscribe((res: OrdenGkResponse[]) => {
      if (res && res.length > 0) {
        this.ordenesgk = res;
        // this.updateTableDataSource();
      }
    });
  }

  // updateTableDataSource = () => this.dataSource = JSON.parse(JSON.stringify(this.ordenesgk));

}
