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

interface AppState {
  product: Product;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // observable of products
  products: Product[] = [];
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

  }

  async ngOnInit() {



    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {

    this.productService.getAll().switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();

      });
  }

  private applyFilter() {
    // Setting the filtered products array
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
  }


}
