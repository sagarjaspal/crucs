import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData{
  message: String;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  message: String;

  constructor(public dialog: MatDialog) {
   }

  openDialog(val : any){
    console.log(val);

    if(val == 1)
      this.message  = "The post will be published!";
    if(val == 0)
      this.message = "Changes made will be discarded!";
    
    this.dialog.open(OkayDialog, {width: '300px', data: {message: this.message}})
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'okay-dialog',
  templateUrl: 'okay-dialog.html'
})
export class OkayDialog {
  
  constructor(public dialogRef: MatDialogRef<OkayDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  onNoClick(){
    this.dialogRef.close();
  }
}
