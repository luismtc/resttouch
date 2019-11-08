import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usrInfo: any = {};

  constructor(private router: Router, private ls: LocalstorageService) {
    this.usrInfo = this.ls.get(GLOBAL.usrTokenVar);
  }

  ngOnInit() {
  }

  LogOut() {
    this.ls.clear(GLOBAL.usrTokenVar);
    this.router.navigate(['/admin/login']);
  }

}
