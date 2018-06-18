import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as productActions from '../actions/product.actions';
import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product';
export type Action = productActions.All;


@Injectable()
export class ProductEffects {


  @Effect()
  public getProduces: Observable<Action> = this.actions
    .ofType(productActions.GET_PRODUCTS)
    .mergeMap(payload => this.productService.getAll())
    .map(products => {

      const productArray: Product[] = [];

      // tslint:disable-next-line:forin
      for (const key in products) {
        const element = products[key];

        productArray.push({
          $key: key,
          category: element.category,
          imageUrl: element.imageUrl,
          price: element.price,
          title: element.title,
        });

      }
      return new productActions.GetProductsSuccess(productArray);
    });

  constructor(
    private actions: Actions,
    private productService: ProductService,
  ) { }

}
