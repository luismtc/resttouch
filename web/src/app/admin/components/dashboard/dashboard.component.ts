import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { UsuarioService } from '../../services/usuario.service';
import { AppMenuService } from '../../services/app-menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesktopNotificationService } from '../../../shared/services/desktop-notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public appMenu: any[];

  constructor(
    private router: Router,
    private ls: LocalstorageService,
    private snackBar: MatSnackBar,
    private usrSrvc: UsuarioService,
    private appMenuSrvc: AppMenuService,
    private dns: DesktopNotificationService
  ) {
    // this.appMenu = this.usrSrvc.getUserAppMenu();
  }

  ngOnInit() {
    this.appMenuSrvc.getData().subscribe((res: any) => {
      if (res) {
        this.appMenu = res;
      }
    });
    this.dns.havePermission().then((res) => {
      if (!res) {
        this.dns.requestPermission();
      }
    });
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
    this.ls.clear(GLOBAL.usrTokenVar);
    this.ls.clear(GLOBAL.usrUnlockVar);
    this.ls.clear('ng2Idle.main.expiry');
    this.ls.clear('ng2Idle.main.idling');
    this.router.navigate(['/admin/login']);
  }

}
