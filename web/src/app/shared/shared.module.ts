import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';

import { FilterPipe } from './pipes/filter.pipe';
import { WindowComponent } from './components/window/window.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { RptFechasComponent } from './components/rpt-fechas/rpt-fechas.component';
import { RptBotonesComponent } from './components/rpt-botones/rpt-botones.component';
import { CargandoComponent } from './components/cargando/cargando.component';
import { CheckPasswordComponent } from './components/check-password/check-password.component';

// const config: SocketIoConfig = { url: 'http://192.168.1.11:8988', options: {} }; // Solo para desarrollo
const config: SocketIoConfig = { url: 'https://restouch.c807.com:8988', options: {} }; // Produccion C807

@NgModule({
  declarations: [
    FilterPipe,
    WindowComponent,
    ConfirmDialogComponent,
    RptFechasComponent,
    RptBotonesComponent,
    CargandoComponent,
    CheckPasswordComponent
  ],
  entryComponents: [
    ConfirmDialogComponent, CheckPasswordComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSidenavModule,
    MatRippleModule,
    FlexLayoutModule
  ],
  exports: [
    FilterPipe,
    WindowComponent,
    ConfirmDialogComponent,
    RptFechasComponent,
    RptBotonesComponent,
    CargandoComponent,
    CheckPasswordComponent
  ]
})
export class SharedModule { }
