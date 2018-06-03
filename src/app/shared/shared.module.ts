import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  providers:[
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ]
})
export class SharedModule { }
