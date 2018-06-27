import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product';
import { Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  constructor(
    private db: AngularFireDatabase,
    private httpClient: HttpClient
  ) {}

  public createProduct(product) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // the url.json tells firebase that we want to work with the database
    return this.httpClient.post(
      'https://e-shop-f49b7.firebaseio.com/products.json',
      product
    );
  }

  // create(product) {
  //   //push product from product-form.html
  //   this.db.list('/products').push(product)
  // }

  // getAllProducts(){
  //   // const headers = new Headers({'Content-Type':'application/json'});
  //   return this.http.get('https://e-shop-f49b7.firebaseio.com/products.json')
  //   //the map operator takes the old observable and wrap the data we get back into tranformed data and wrap it into another observable
  //   .map(
  //     (response: Response) => {
  //       const data = response.json();
  //       return data;
  //     }
  //   );
  // }

  public getAll() {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.httpClient
      .get<Product[]>('https://e-shop-f49b7.firebaseio.com/products.json')
      .map(products => {
        for (const product of products) {
          if (!product) {
            // product = []
          }
        }
        return products;
      });
  }

  // method to retrieve one product by id
  public getProduct(productId) {
    // return this.db.object('/products/' + productId);
    return this.httpClient.get(`https://e-shop-f49b7.firebaseio.com/products/${productId}.json`);
  }

  // updateProduct(productId, product){
  //   this.db.object('/products/' + productId).update(product)
  // }
  public updateProduct(productId, product) {
    return this.httpClient.put(
      `https://e-shop-f49b7.firebaseio.com/products/${productId}.json`,
      product
    );
  }

  delete(productId) {
    return this.httpClient.delete(`https://e-shop-f49b7.firebaseio.com/products/${productId}.json`);
    // return this.db.object('/products/' + productId).remove();
    // return this.httpClient.delete(`https://e-shop-f49b7.firebaseio.com/products/${productId}.json`);
  }
}
