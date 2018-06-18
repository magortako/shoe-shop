import * as PostActions from '../actions/product.actions';
import { Product } from '../models/product';

export type Action = PostActions.All;

export interface IProductState {
  loading: boolean;
  products: Product[];
}

const initialState: IProductState = {
  loading: false,
  products: [],
};

// Reducer function
export function productReducer(state: Product, action: Action) {

  switch (action.type) {

    case PostActions.GET_PRODUCTS: {
      return { ...state, loading: true };
    }

    case PostActions.GET_PRODUCTS_SUCCESS: {
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
