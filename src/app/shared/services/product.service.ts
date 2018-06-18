import { Product } from './../models/product';
import { Http, Headers, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {


  constructor(private db: AngularFireDatabase, private http: Http) { }

  public createProduct(product) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // the url.json tells firebase that we want to work with the database
    return this.http.post('https://e-shop-f49b7.firebaseio.com/products.json', product, { headers: headers });
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

  public getAll(): Observable<Product[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .get('https://e-shop-f49b7.firebaseio.com/products.json', { headers: headers })
      .map((res) => res.json());
  }

  // method to retrieve one product by id
  public getProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  // updateProduct(productId, product){
  //   this.db.object('/products/' + productId).update(product)
  // }
  public updateProduct(productId, product) {
    return this.http.put('https://e-shop-f49b7.firebaseio.com/products.json/' + productId, product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
