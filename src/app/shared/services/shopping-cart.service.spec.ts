import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartService } from 'shared/services/shopping-cart.service';

xdescribe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
