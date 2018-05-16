import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //observable of products
  products$;

  constructor(productService: ProductService) { 
    this.products$ = productService.getAll();
  }


}
