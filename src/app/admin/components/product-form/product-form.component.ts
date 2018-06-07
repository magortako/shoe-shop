import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { Response } from "@angular/http"

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  // product:Product[];
  id;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private categoryService: CategoryService, 
    private productService:ProductService
  )
    {
      this.categories$ = categoryService.getAll();

      //
      this.id = this.route.snapshot.paramMap.get('id');
      //if we have an id, we want to read the product with this id from firebase
      //we need to subscribe to an observable to read this product
      if (this.id) this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p)
    }

  //  save(product){
  //   //update product
  //   if(this.id) this.productService.updateProduct(this.id, product);
  //   else this.productService.createProduct(product);

  //   //  this.productService.create(product);
  //    console.log(product);

  //    this.router.navigate(['/admin/products']);
  //  }

  saveProduct(){
    if(this.id) this.productService.updateProduct(this.id, this.product);
    //the createProduct method returns an observable
    else this.productService.createProduct(this.product)
    //subscribe to the observable
    .subscribe(
      //callback for recieved data
      (response: Response) => console.log(response),
      //callback to fetch errors
      (error) => console.log(error)
    )
    this.router.navigate(['/admin/products']);
  }


   deleteProduct(){
     //ask user for confirmation
     if(!confirm('Are you sure you want to delete this product?')) return;
      
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
   }

  ngOnInit() {
  }

}
