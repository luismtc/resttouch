import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClienteMaster } from '../../../interfaces/cliente-master';

interface IDataClienteMasterDialog {
  clienteMaster: ClienteMaster
}


@Component({
  selector: 'app-cliente-master-dialog',
  templateUrl: './cliente-master-dialog.component.html',
  styleUrls: ['./cliente-master-dialog.component.css']
})
export class ClienteMasterDialogComponent implements OnInit {

  public clienteMaster: ClienteMaster;

  constructor(
    public dialogRef: MatDialogRef<ClienteMasterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDataClienteMasterDialog
  ) { }

  ngOnInit(): void {
    if (this.data.clienteMaster) {
      this.clienteMaster = this.data.clienteMaster;
    }
  }

  cancelar = () => this.dialogRef.close();

}
