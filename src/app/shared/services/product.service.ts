import { Product } from './../models/product';
import { Http, Headers, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {


  constructor(private db: AngularFireDatabase, private http: Http) { }

  createProduct(product){
    return this.http.post('https://e-shop-f49b7.firebaseio.com/products.json', product)
  }


  // create(product) {
  //   //push product from product-form.html
  //   this.db.list('/products').push(product)
  // }

  //method for returning all products from the db
  getAll(){
    return this.db.list('/products');
  }

  // getAllProducts(){
  //   this.http.get('https://e-shop-f49b7.firebaseio.com/products.json')
  //   .subscribe(
  //     (response:Response) =>{
  //       //extract the data and turn into a javascript object 
  //       const products: Product[] = response.json();
  //       this.pro
  //     }
  //   );
  // }

  //method to retrieve one product by id
  getProduct(productId){
    return this.db.object('/products/' + productId);
  }

  // updateProduct(productId, product){
  //   this.db.object('/products/' + productId).update(product)
  // }
  updateProduct(productId, product){
    return this.http.put('https://e-shop-f49b7.firebaseio.com/products.json/' + productId, product)
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove()
  }
}
