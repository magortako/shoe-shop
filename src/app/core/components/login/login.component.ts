import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private router: Router) {
  }


  onLogIn() {
    const email = this.loginForm.value.email;
    const password =this.loginForm.value.password;
    this.authService.loginUser(email, password);
  }

  loginGoogle() {
    this.authService.loginGoogle(); // it is calling the login method
  }
}
