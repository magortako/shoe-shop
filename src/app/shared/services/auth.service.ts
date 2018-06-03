import { UserService } from 'shared/services/user.service';
import { AppUser } from 'shared/models/app-user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import'rxjs/add/operator/switchMap';
import'rxjs/add/observable/of';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>;
  // ` //store the url in local storage --2nd argument`
  constructor(
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute, 
    private userservice: UserService) 
    { 

    this.user$ = afAuth.authState;

    }

  login() {//implementing login method
    //here we store the route path that the user wanted to access or redirect them to the homepage
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    //store in localstorage
    localStorage.setItem('returnUrl' , returnUrl);

    //after saving the url in the loc storage, we can be redirected to google authentication platform
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());    //firebase class for authorization
    
  }

  logout() {
    this.afAuth.auth.signOut();
  } 

  get appUser$(): Observable<AppUser>{
       //user observable
       return this.user$
       
      // /we need to get this firebase user object and then read the actual application user object from the db
      //we map and switch to a new observable returned from our user service .get method
      .switchMap(user => 
      {
        if (user) return this.userservice.get(user.uid);
        return Observable.of(null);
      });

}
//we added auth.service.ts simply to enable testability of our components and also have a better separation of concern in our code
}