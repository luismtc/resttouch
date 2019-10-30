import { Component, OnInit } from '@angular/core';
import { usrLogin, Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usr: usrLogin;
  private usuario: Usuario;

  constructor(private usrSrvc: UsuarioService, private ls: LocalstorageService) {
    this.usr = new usrLogin(null, null);
    this.usuario = new Usuario(null, null, null, null, null);
  }

  ngOnInit() {
  }

  doLogin() {
    this.usrSrvc.login(this.usr).subscribe(res => {
      if (res.token) {
        this.ls.set(GLOBAL.usrTokenVar, res.token, false);
        this.usrSrvc.getAll().subscribe(lista => {
          console.log(lista);
        })
      } else {
        console.log(res);
      }
    }, (error) => {
      console.log(error);
    })
  }

}
