import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { 

   }

   //calculate the total number of shopping cart items
   async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    //shopping cart notification...get all cart quantities
   this.cart$ = await this.shoppingCartService.getCart();
   }

  logout(){
    this.auth.logout();
  }

}
