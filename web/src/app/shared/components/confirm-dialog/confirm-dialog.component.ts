import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class ConfirmDialogModel {
  constructor(
    public title: string, 
    public message: string, 
    public lblBtnConfirm: string,
    public lblBtnDeny: string
    ) { }
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  public title: string;
  public message: string;
  public lblBtnConfirm: string;
  public lblBtnDeny: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) {
    this.title = data.title;
    this.message = data.message;
    this.lblBtnConfirm = data.lblBtnConfirm;
    this.lblBtnDeny = data.lblBtnDeny;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
