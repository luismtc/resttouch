import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ClockComponent } from './components/clock/clock.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarDirective } from './directives/sidebar.directive';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [LoginComponent, DashboardComponent, HeaderComponent, ClockComponent, MenuComponent, SidebarDirective],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule
  ],
  exports: [
    HeaderComponent, MenuComponent
  ]
})
export class AdminModule { }
