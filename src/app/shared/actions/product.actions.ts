import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';


export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  public payload = null;
  // constructor(public payload: string) { }
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}

export type All
  = GetProducts
  | GetProductsSuccess;
