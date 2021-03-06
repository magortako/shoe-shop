import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular5-data-table';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filterproducts } from '../pipes/product.filter.pipe';
import { CategoryFilter } from '../pipes/category.filter.pipe';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      //ADMIN ACCESS
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] }
    ])

  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    Filterproducts,
    CategoryFilter
  ],
  providers: [
    AdminAuthGuardService
  ],
})
export class AdminModule { }
