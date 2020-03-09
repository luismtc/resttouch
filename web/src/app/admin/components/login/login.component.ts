import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public usr: usrLogin;
  public usuario: Usuario;

  constructor(
    private usrSrvc: UsuarioService, 
    private ls: LocalstorageService,
    private router: Router
  ) {
    this.usr = new usrLogin(null, null);
    this.usuario = new Usuario(null, null, null, null, null, null, 0, 0);
  }

  ngOnInit() {
    this.checkIfLogged();
  }

  checkIfLogged = async () => {
    const valido = await this.usrSrvc.checkUserToken();
    if (valido) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/admin/login']);
    }
  }

  esMovil = (): boolean => {
    let estoyEnMovil: boolean = false, ua = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      estoyEnMovil = true;
    }
    return estoyEnMovil;
  }

  doLogin() {
    this.usrSrvc.login(this.usr).subscribe(res => {
      if (res.token) {
        this.ls.set(GLOBAL.usrTokenVar, { 
          token: res.token, usuario: res.usrname, nombres: res.nombres, apellidos: res.apellidos, sede: +res.sede, idusr: +res.idusr, enmovil: this.esMovil(), acceso: res.acceso
        });
        this.router.navigate(['/admin/dashboard']);
      } else {
        console.log(res);
      }
    }, (error) => {
      console.log(error);
    })
  }

}
