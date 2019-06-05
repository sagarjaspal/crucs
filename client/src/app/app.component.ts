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
  dataRegister:any= {}

  constructor(private loginService: LoginService, private router: Router)
  {
    this.user = new User();
  }

  validateLogin()
  {
    let role;

    var radio1 = document.getElementById('student') as HTMLInputElement;
    var radio2 = document.getElementById('teacher') as HTMLInputElement;
    var radio3 = document.getElementById('admin') as HTMLInputElement;

    if(this.user.username && this.user.password)
    {
      if(radio1.checked)
        role = 'student';
      else if(radio2.checked)
        role = 'teacher';
      else if(radio3.checked)
      {
          this.loginService.authenticateAdmin(this.user).subscribe(data => {
          this.dataRegister = data;
          if(this.dataRegister.success)
          {
            this.loginService.storeUserData(this.dataRegister.token, this.dataRegister.user);
            
            this.router.navigate(['admin']);
          } 
          else 
          {
            console.log('Failure');
            this.router.navigate(['home']);
          }
        });
      }
/*
      this.loginService.validateLogin(this.user, role).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success')
        {
          this.router.navigate(['/teacher']);
        }
        else
          alert('Wrong Username or Password');
      }, error => {
        console.log('error is ', error);
      });*/
    }
    else
    {
      alert('Enter username and password');
    }
  }
}
