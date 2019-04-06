import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ShowPostService } from './show-post.service';
import { Post } from 'src/app/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css'],
  providers: [ShowPostService]
})
export class BlogHomeComponent implements OnInit {

  public posts: any[];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public showPostService: ShowPostService, private router: Router) 
  {
    iconRegistry.addSvgIcon(
        'pre-thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/pre-thumbup-icon.svg'));

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/thumbup-icon.svg'));
  }

  getAllPost(){
    this.showPostService.getAllPost().subscribe((result) => {
      this.posts = result['data'];
      console.log(this.posts);
    })
  }

  
  ngOnInit() {
    this.getAllPost();
  }

}
