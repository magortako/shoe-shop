import { AuthService } from 'shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate { //can activate interface

  //injecting authservice in order to get the authentication state and the router service for redirection
  constructor( private auth:AuthService, private router: Router  ) { } 

  //method which will implement true or false if the user is logged in or not
  canActivate(route, state : RouterStateSnapshot){ 
    ///we access the user observable and we get a user object
    //we transform this observable from a user object into a boolean
    return this.auth.user$.map(user=>{ 
      //if we have a user it will return true 
      if(user) return true
      //returnUrl
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    })  
  }

}
