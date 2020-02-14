import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { UsuarioService, IBtnModulo } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usrInfo: any = {};
  public appMenu: IBtnModulo[];

  constructor(
    private router: Router, 
    private ls: LocalstorageService,
    private usrSrvc: UsuarioService
  ) {
    this.appMenu = this.usrSrvc.getUserAppMenu();
    this.usrInfo = this.ls.get(GLOBAL.usrTokenVar);
  }

  ngOnInit() {
  }

  handleClick = (rol: string = '') => {
    switch(rol) {
      case 'LOGOUT' : this.LogOut(); break;
    }
  }

  LogOut() {
    this.ls.clear(GLOBAL.usrTokenVar);
    this.router.navigate(['/admin/login']);
  }

}
