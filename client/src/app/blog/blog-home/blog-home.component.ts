import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) 
  {
    iconRegistry.addSvgIcon(
        'pre-thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/pre-thumbup-icon.svg'));

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/thumbup-icon.svg'));
  }

  ngOnInit() {
  }

}
