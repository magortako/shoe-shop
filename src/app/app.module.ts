import { CoreModule } from './core/core.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuardService } from 'shared/services/auth-guard.service';

import { environment } from './../environments/environment';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase), //initializes the app
    AngularFireDatabaseModule, //this helps us work with the database
    AngularFireAuthModule, // adds authentication
    NgbModule.forRoot(),
    RouterModule.forRoot([
      //ANONYMOUS USER ACCESS
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])

  ],
  providers: [
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
