import { ShoppingCartService } from './../shopping-cart.service';

import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input ('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product)
  }

  //Find the quantity of a specific product card
  getQuantity(){
    if(!this.shoppingCart) return 0;
    //a reference to the shopping cart item 
    let item = this.shoppingCart.items[this.product.$key];
    //if there is no item with a key
    return item ? item.quantity : 0;

  }
  
}
