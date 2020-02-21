import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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

import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

import { PosRoutingModule } from './pos-routing.module';
import { CobrarPedidoComponent } from './components/cobrar-pedido/cobrar-pedido.component';
import { FormaPagoComponent } from './components/formaPago/forma-pago/forma-pago.component';
import { ListaFormaPagoComponent } from './components/formaPago/lista-forma-pago/lista-forma-pago.component';
import { FormFormaPagoComponent } from './components/formaPago/form-forma-pago/form-forma-pago.component';


@NgModule({
  declarations: [CobrarPedidoComponent, FormaPagoComponent, ListaFormaPagoComponent, FormFormaPagoComponent],
  entryComponents: [
    CobrarPedidoComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
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
    MatKeyboardModule,
    MatSidenavModule,
    EcoFabSpeedDialModule
  ],
  exports: [CobrarPedidoComponent]
})
export class PosModule { }
