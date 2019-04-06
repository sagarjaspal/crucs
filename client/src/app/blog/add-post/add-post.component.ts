import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Post } from 'src/app/models/post.model';
import { AddPostService } from './add-post.service';

export interface DialogData{
  message: String;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit 
{

  message: String;
  public post: Post;

  constructor(public dialog: MatDialog, private addPostService: AddPostService) 
  {
    this.post = new Post();
  }

  openDialog(val : any)
  {
    if(val == 1)
      this.message  = "The post will be published!";
    if(val == 0)
      this.message = "Changes made will be discarded!";
    
    this.dialog.open(OkayDialog, {width: '300px', data: {message: this.message}})
    this.dialog.afterAllClosed.subscribe(() =>{
        this.addPost();
    })
  }


  addPost()
  {
    if(this.post.title && this.post.content )
    {
      this.post.url = '../../../assets/images/blog.jpg'
      
      this.addPostService.addPost(this.post).subscribe(res => {
        console.log(res);
      })
    }
    else
    {
      alert('Required post details missing');
    }
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

  onNoClick()
  {
    this.dialogRef.close();
  }
}
