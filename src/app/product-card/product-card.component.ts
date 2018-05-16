import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input ('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor( private cartService : ShoppingCartService ) { }

  addToCart(product:Product){
    //store the product to localstorage if not logged in
    let cartId = localStorage.getItem('cartId');

    if(!cartId) {

      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);

        //Add product to cart
      });
    }
    else{
      //Add product to cart
    }
  }

}
