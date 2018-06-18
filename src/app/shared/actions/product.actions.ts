import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';


export class GetProduct implements Action {
  readonly type = GET_PRODUCT;
  constructor(public payload: string) { }
}

export class GetProductSuccess implements Action {
  readonly type = GET_PRODUCT_SUCCESS;
  constructor(public payload: Product) { }
}

export type All
  = GetProduct
  | GetProductSuccess;