import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  authToken: any;
  user: any;

  constructor(private http: HttpClient) 
  { 

  }
/*
  validateLogin(user : User, role)
  {
    if(role === 'teacher')
    {
      return this.http.post('api/teacher/authenticate', {
        username: user.username,
        password: user.password
      });
    }

    else if(role === 'admin')
    {
      return this.http.post('api/admin/authenticate', {
        username: user.username,
        password: user.password
      });
    }
  }
*/
  authenticateAdmin(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/admin/authenticate', user,{ headers: headers });
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
