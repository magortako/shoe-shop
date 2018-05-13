import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }


  create(product) {
    //push product from product-form.html
    this.db.list('/products').push(product)
  }

  //method for returning all products from the db
  getAll(){
    return this.db.list('/products');
  }

  //method to retrieve one product by id
  getProduct(productId){
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product){
    this.db.object('/products/' + productId).update(product)
  }
}
