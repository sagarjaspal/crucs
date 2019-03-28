import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material'
import { MatDialogModule } from '@angular/material'

import { AddPostComponent } from './add-post/add-post.component';
import { OkayDialog } from './add-post/add-post.component';

@NgModule({
  declarations: [BlogHomeComponent, AddPostComponent, OkayDialog],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [OkayDialog]
})
export class BlogModule { }
