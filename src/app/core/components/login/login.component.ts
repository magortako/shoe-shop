import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { } //inject the auth.service

  login(){
    this.auth.login() //it is calling the login method
  }

}
