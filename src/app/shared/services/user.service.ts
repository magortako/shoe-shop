import { AppUser } from 'shared/models/app-user';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  //injecting an angular fire database object
  constructor( private db: AngularFireDatabase ) { }

  //save method takes a user object and this user
  save(user:firebase.User){
    //location of the object
    console.log(this.db);
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email:user.email
    });
  }

  get(uid: string):FirebaseObjectObservable<AppUser>{
    //aplication user object
    return this.db.object('/users/' + uid);
  }

}
