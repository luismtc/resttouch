import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { UsuarioService } from '../../services/usuario.service';
import { AppMenuService } from '../../services/app-menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import { SolicitaPinInactividadComponent } from '../solicita-pin-inactividad/solicita-pin-inactividad.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usrInfo: any = {};
  public appMenu: any[];
  public idleState = false;
  public timedOut = false;
  public lastPing?: Date = null;

  constructor(
    private router: Router,
    private ls: LocalstorageService,
    private snackBar: MatSnackBar,
    private usrSrvc: UsuarioService,
    private appMenuSrvc: AppMenuService,
    private idle: Idle,
    private keepalive: Keepalive,
    public dialog: MatDialog
  ) {
    this.usrInfo = this.ls.get(GLOBAL.usrTokenVar);
    this.setIdleConfigs();
  }

  ngOnInit() {
    this.appMenuSrvc.getData().subscribe((res: any) => {
      if (res) {
        this.appMenu = res;
      }
    });
  }

  setIdleConfigs = () => {
    this.idle.setIdle(GLOBAL.idleTimeInSeconds);
    this.idle.setTimeout(GLOBAL.idleTimeInSeconds);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => this.idleState = false);

    this.idle.onTimeout.subscribe(() => {
      this.idleState = true;
      this.timedOut = true;

      const solicitaPinRef = this.dialog.open(SolicitaPinInactividadComponent, {
        width: '25%',
        hasBackdrop: true,
        disableClose: true,
        autoFocus: true,
        data: null
      });

      solicitaPinRef.afterClosed().subscribe(() => this.reset());
    });

    this.idle.onIdleStart.subscribe(() => this.idleState = true);

    this.idle.onTimeoutWarning.subscribe((conteo: number) => this.idleState = true);

    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  reset = () => {
    this.idle.watch();
    this.idleState = false;
    this.timedOut = false;
  }

  handleClick = (modulo: string = '') => {
    const objModulo: any = this.appMenu.find(m => m.nombre === modulo);
    // console.log(objModulo);
    if (objModulo) {
      const submodulo: any = this.usrSrvc.transformSubModule(objModulo.submodulo);
      // console.log(submodulo);
      this.appMenuSrvc.updOpciones(submodulo);
      this.snackBar.open(`Cambio al módulo ${modulo}`, 'Módulo', { duration: 5000 });
    }
  }

  LogOut() {
    this.ls.clear('ng2Idle.main.expiry');
    this.ls.clear('ng2Idle.main.idling');
    this.ls.clear(GLOBAL.usrTokenVar);
    this.router.navigate(['/admin/login']);
  }

}
