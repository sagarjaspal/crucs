import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public user: User;
}
