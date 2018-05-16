import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  //implement firebase object
  constructor(private db: AngularFireDatabase) {

   }

   getAll(){
     return this.db.list('/categories', {
       //sorting categories alphabetically
       query:{
        orderByChild:'name'
       }
     });
   }

}
