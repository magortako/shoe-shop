import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from 'shared/models/product';

@Injectable()
export class CategoryService {

  //implement firebase object
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {

   }

   getAll(){
    // return this.httpClient.get('https://e-shop-f49b7.firebaseio.com/categories.json');
     return this.db.list('/categories', {
       //sorting categories alphabetically
       query:{
        orderByChild:'name'
       }
     });
   }

}
