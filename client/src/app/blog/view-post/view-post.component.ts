import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post: any;
  posta: any;
  
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.post = navigation.extras.state as {
      title: string,
      desciption: string,
      url: string,
      content: string,
      author: string
    };
   }

  ngOnInit() {
    this.posta = history.state.title;
    console.log(this.posta);
  }

}
