const deepFreeze = require('deep-freeze');

import { productReducer, initialState, Action } from 'shared/reducers/product.reducer';
import * as types from 'shared/actions/product.actions.ts';
import { Product } from 'shared/models/product';

describe('productsReducer()', () => {

  it('should return the initial state', () => {

    expect(productReducer(undefined, { type: null, payload: null })).toEqual(initialState);

  });

});

it('Should loading be true while data gets loaded', () => {

  const stateBeforeMock = initialState;

  const action: Action = { type: types.GET_PRODUCTS, payload: null };

  const stateAfterMock = {
    products: [],
    loading: true
  };

  deepFreeze(stateBeforeMock);

  expect(productReducer(stateBeforeMock, action)).toEqual(stateAfterMock);

});

it('Should ', () => {

  const payloadMock: Product[] = [
    {
      $key: '$key',
      category: 'category',
      imageUrl: 'imageUrl',
      price: 200,
      title: 'title',
    }
  ];


  const stateBeforeMock = {
    ...initialState,
    loading: true
  };

  const action: Action = { type: types.GET_PRODUCTS_SUCCESS, payload: payloadMock };

  deepFreeze(stateBeforeMock);

  const stateAfterMock = {
    products: payloadMock,
    loading: false,
  };

  expect(productReducer(stateBeforeMock, action)).toEqual(stateAfterMock);

});
