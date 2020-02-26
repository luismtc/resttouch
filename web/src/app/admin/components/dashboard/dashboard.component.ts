import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { UsuarioService } from '../../services/usuario.service';
import { AppMenuService } from '../../services/app-menu.service';

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
    private usrSrvc: UsuarioService,
    private appMenuSrvc: AppMenuService
  ) {
    //this.appMenu = this.usrSrvc.getUserAppMenu();
  }

  ngOnInit() {
    this.appMenuSrvc.getData().subscribe((res: any) => {
      if (res) {
        this.appMenu = res;
      }
    });
  }

  handleClick = (modulo: string = '') => {
    const objModulo: any = this.appMenu.find(m => m.nombre === modulo);
    //console.log(objModulo);
    if (objModulo) {
      const submodulo: any = this.usrSrvc.transformSubModule(objModulo.submodulo);
      //console.log(submodulo);
      this.appMenuSrvc.updOpciones(submodulo);
    }
  }

  LogOut() {
    this.ls.clear(GLOBAL.usrTokenVar);
    this.router.navigate(['/admin/login']);
  }

}
