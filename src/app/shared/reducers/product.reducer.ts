import * as ProductAction from '../actions/product.actions';
import { Product } from '../models/product';

export type Action = ProductAction.All;

export interface IProductState {
  loading: boolean;
  products: Product[];
}

export const initialState: IProductState = {
  loading: false,
  products: [],
};

// Reducer function
export function productReducer(state = initialState, action: Action) {

  console.log(state);

  switch (action.type) {

    case ProductAction.GET_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductAction.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [

          ...action.payload,

        ],
        loading: false
      };

    }

    default: {
      return state;

    }

  }
}
