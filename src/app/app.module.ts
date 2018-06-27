import { RegisterComponent } from './core/components/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductEffects } from 'shared/effects/product.effetcts';
import { productReducer } from 'shared/reducers/product.reducer';
import { AuthService } from 'shared/services/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // initializes the app

    EffectsModule.forRoot([ProductEffects]),

    StoreModule.forRoot({
      product: productReducer
    }),

    StoreDevtoolsModule.instrument({ maxAge: 25 }),

    RouterModule.forRoot([
      // ANONYMOUS USER ACCESS
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ])

  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    AdminAuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
