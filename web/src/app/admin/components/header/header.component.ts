import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { UsuarioService } from '../../services/usuario.service';
import { AppMenuService } from '../../services/app-menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usrInfo: any = {};
  public appMenu: any[];

  constructor(
    private router: Router, 
    private ls: LocalstorageService,
    private _snackBar: MatSnackBar,
    private usrSrvc: UsuarioService,
    private appMenuSrvc: AppMenuService
  ) {
    // this.appMenu = this.usrSrvc.getUserAppMenu();
    this.usrInfo = this.ls.get(GLOBAL.usrTokenVar);
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
      this._snackBar.open(`Cambio al módulo ${modulo}`, 'Módulo', { duration: 5000 });
    }
  }

  LogOut() {
    this.ls.clear(GLOBAL.usrTokenVar);
    this.router.navigate(['/admin/login']);
  }

}
