import * as PostActions from '../actions/product.actions';
import { Product } from '../models/product';

export type Action = PostActions.All;

/// Reducer function
export function productReducer(state: Product, action: Action) {

  switch (action.type) {

    case PostActions.GET_PRODUCT: {
      return { ...state, loading: true };

    }

    case PostActions.GET_PRODUCT_SUCCESS: {
      return { ...state, ...action.payload, loading: false };

    }

    default: {
      return state;

    }

  }
}