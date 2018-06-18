import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as productActions from '../actions/product.actions';
export type Action = productActions.All;


@Injectable()
export class ProductEffects {

  constructor(private actions: Actions, private db: AngularFireDatabase) { }

  @Effect()
  getPost: Observable<Action> = this.actions.ofType(productActions.GET_PRODUCT)
    .map((action: productActions.GetProduct) => action.payload)
    .delay(2000) // delay to show spinner
    .mergeMap(payload => this.db.object(payload))
    .map(product => {
      product.pushKey = product.$key;
      return new productActions.GetProductSuccess(product);
    });

}
