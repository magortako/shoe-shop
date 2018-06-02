import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  //observable of products
  products: Product[] = [];
  filteredProducts: Product[];
  category: string;
  cart:any;
  subscription:Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) 
  {

    productService.getAll().switchMap(products => 
    {
      this.products = products;
      return route.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category');

        //Setting the filtered products array
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }
  async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart => this.cart = cart;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
