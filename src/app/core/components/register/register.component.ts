import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  constructor(
    private authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onSignUp() {
    this.authService.signUpUser(this.registerForm.value).subscribe(
      user => {
        alert(`User ${user} was created`);
      },
      err => alert(`user could not be created`),
      () => this.router.navigate([''])
      
    );
  }
}
