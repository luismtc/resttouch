import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from './admin/services/localstorage.service';
import { GLOBAL } from './shared/global';
import { UsuarioService } from './admin/services/usuario.service';
import { Router } from '@angular/router';
import { AccesoUsuario, SubModulo, NodoAppMenu } from './admin/interfaces/acceso-usuario';
import { AppMenuService } from './admin/services/app-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('sidenav') sidenav: any;

  title = 'Rest-Touch';
  isLogged: boolean = false;
  opened: boolean;

  public usrAppMenu: AccesoUsuario[] = [];

  constructor(
    private ls: LocalstorageService,
    private usrSrvc: UsuarioService,
    private router: Router,
    private appMenuSrvc: AppMenuService
  ) { }

  async ngOnInit() {
    await this.checkIfUserIsLogged();
  }

  private goToLogin = () => {
    this.isLogged = false;
    this.usrAppMenu = [];
    this.router.navigate(['/admin/login']);        
  }

  async checkIfUserIsLogged() {
    const usrData = this.ls.get(GLOBAL.usrTokenVar);
    if (usrData) {
      if (usrData.token) {
        const valido = await this.usrSrvc.checkUserToken();
        if (valido) {
          this.isLogged = true;
          this.usrAppMenu = this.usrSrvc.getAppMenu();
          this.appMenuSrvc.updData(this.usrAppMenu);
          //console.log(this.usrAppMenu);
        } else {
          this.goToLogin();
        }
      } else {
        this.goToLogin();
      }
    } else {
      this.goToLogin();
    }
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
