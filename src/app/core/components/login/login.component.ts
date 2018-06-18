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

  constructor(private auth: AuthService){
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

  loginGoogle(){
    this.auth.loginGoogle() //it is calling the login method
  }

}
