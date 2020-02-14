import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { UsuarioService, IBtnModulo } from '../../services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public appMenu: IBtnModulo[];

  constructor(
    private router: Router, 
    private ls: LocalstorageService,
    private usrSrvc: UsuarioService
  ) {
    this.appMenu = this.usrSrvc.getUserAppMenu();
  }

  ngOnInit() { }

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
