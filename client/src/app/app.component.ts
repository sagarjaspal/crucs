import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from 'src/app/login.service'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginService ]
})
export class AppComponent 
{
  public user: User;

  constructor(private loginService: LoginService, private router: Router)
  {
    this.user = new User();
  }

  validateLogin()
  {
    if(this.user.username && this.user.password)
    {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success')
        {
          this.router.navigate(['/teacher']);
        }
        else
          alert('Wrong Username or Password');
      }, error => {
        console.log('error is ', error);
      });
    }
    else
    {
      alert('Enter username and password');
    }
  }
}
