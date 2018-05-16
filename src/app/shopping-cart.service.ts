import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }


  private async getOrCreateCart() {

    //store the product to localstorage if not logged in
    let cartId = localStorage.getItem('cartId');

    if (!cartId) {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      //Add product to cart
      return this.getCart(result.key)
    }
      //Add product to cart
      return this.getCart(cartId);
  }

}
