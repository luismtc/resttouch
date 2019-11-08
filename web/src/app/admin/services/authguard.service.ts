import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private usrSrvc: UsuarioService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let url: string = state.url;
    const d = await this.checkLogin(url);
    return d;    
  }

  async checkLogin(url: string){
    const valido = await this.usrSrvc.checkUserToken();
    if(valido){
      return valido;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
