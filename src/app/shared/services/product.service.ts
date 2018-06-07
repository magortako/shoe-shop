import { Product } from './../models/product';
import { Http, Headers, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ProductService {


  constructor(private db: AngularFireDatabase, private http: Http) { }

  createProduct(product){
    const headers = new Headers({'Content-Type':'application/json'});
    //the url.json tells firebase that we want to work with the database 
    return this.http.post('https://e-shop-f49b7.firebaseio.com/products.json', product, {headers:headers})
  }


  getAllProducts(){
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.get('https://e-shop-f49b7.firebaseio.com/products.json', {headers:headers})
    //the map operator takes the old observable and wrap the data we get back into tranformed data and wrap it into another observable
    .map(
      (response: Response) => {
        const data = response.json();
        for ( const product of data) {
          product.title = product.title;
        }
        return data;
      }
    );
  }

  // create(product) {
  //   //push product from product-form.html
  //   this.db.list('/products').push(product)
  // }

  //method for returning all products from the db
  // getAll(){
  //   return this.db.list('/products');
  // }

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
