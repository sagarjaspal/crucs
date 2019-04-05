import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowPostService {

  constructor(private http: HttpClient) { }

  getAllPost(){
    return this.http.post('/api/blog/showPost', {});
  }
}
