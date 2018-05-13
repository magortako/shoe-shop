import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private categoryService: CategoryService, 
    private productService:ProductService
  )
    {
      this.categories$ = categoryService.getCategories();

      //
      this.id = this.route.snapshot.paramMap.get('id');
      //if we have an id, we want to read the product with this id from firebase
      //we need to subscribe to an observable to read this product
      if (this.id) this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p)
    }

   save(product){
    //update product
    if(this.id) this.productService.updateProduct(this.id, product);
    else this.productService.create(product);

    //  this.productService.create(product);
     console.log(product);

     this.router.navigate(['/admin/products']);
   }

  ngOnInit() {
  }

}
