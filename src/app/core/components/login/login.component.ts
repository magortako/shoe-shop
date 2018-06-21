import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
// import { Validators,FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  // form: FormGroup;

  constructor(private authService: AuthService){
    // private router: Router) {

    // this.form = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]

    // })

   } 

  //  login(){
  //    const formValue = this.form.value;

  //    this.auth.login(formValue.email, formValue.password)
  //     .subscribe(
  //       () => this.router.navigate(['']),
  //     )
  //  }

  onLogIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password)
  }

  loginGoogle(){
    this.authService.loginGoogle() //it is calling the login method
  }

}
