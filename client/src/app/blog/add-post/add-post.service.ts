import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private http:HttpClient) { }

  addPost(post:Post){
   
    return this.http.post('/api/blog/addPost', {
      title: post.title,
      description: post.description,
      content: post.content,
      author: post.author
    })
  }
}
