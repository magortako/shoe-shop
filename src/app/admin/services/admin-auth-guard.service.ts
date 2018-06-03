import { Observable } from 'rxjs/Observable';
import { UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import'rxjs/add/operator/switchMap';
import'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private userservice: UserService) { }

  //method
  canActivate(): Observable<boolean>{
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
