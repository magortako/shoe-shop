import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/core/components/home/home.component';
import { BsNavbarComponent } from 'app/core/components/bs-navbar/bs-navbar.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
