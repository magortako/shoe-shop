import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Store } from '@ngrx/store';
import { GetProducts } from 'shared/actions/product.actions';
import { IProductState } from 'shared/reducers/product.reducer';

export interface AppState {
  product: IProductState;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // observable of products
  public products$ = this.store.select((s) => s.product);

  public products: Product[] = null;

  filteredProducts: Product[];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {

    // this.productService.getAllProducts()
    // .subscribe(
    //   (products: Product[]) => console.log(products),
    //   (error) => console.log(error)
    // );

    this.store.dispatch(new GetProducts());

  }

  async ngOnInit() {

    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {

    this.products$
      .map((prod) => {
        this.products = prod.products;
      })
      .switchMap(() => {
        return this.route.queryParamMap;
      })
      .subscribe((params) => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    // Setting the filtered products array
    this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : this.products;
  }

}
