import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.formBuilder.group({
    firstName : ['', Validators.required],
    email : ['', [Validators.required, Validators.email] ],
    password : ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSignUp(){
    console.log(this.registerForm.value)
    // this.authService.signUpUser(form).subscribe(
    //   user => {
    //     alert(`User ${user} was created`)
    //   },
    //   err => alert(`user could not be created`)
    // )
    
    // const name = form.value.name;
    // const email = form.value.email;
    // const password = form.value.password;
    // this.authService.signUpUser(email,password)
  }

}
