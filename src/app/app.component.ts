import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private userService: UserService, private auth: AuthService, router: Router) {
    //we get the user object using the user observable subscription
    auth.user$.subscribe(user => {
      //we gonna read the localstorage reurnUrl
      if(!user) return;
        
        userService.save(user);

        //store the user in the firebase db
        let returnUrl = localStorage.getItem('returnUrl');
        if(!returnUrl) return;
        //navigate to the specific url
          localStorage.removeItem('retunUrl');
          router.navigateByUrl(returnUrl);
    })
  }
}
