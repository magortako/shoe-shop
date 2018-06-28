import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product:any = {};
  // product:Product[];
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getAll();

    //
    this.id = this.route.snapshot.paramMap.get('id');
    // if we have an id, we want to read the product with this id from firebase
    // we need to subscribe to an observable to read this product
    if (this.id) {
      // this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p);
      this.productService.getProduct(this.id).subscribe(p => {
        this.product = p;
      });
    }
  }

  saveProduct() {
    console.log(this.id, this.product);
    if (this.id) {
      this.productService.updateProduct(this.id, this.product).subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () =>{

        }
      );
    } else {
      // subscribe to the observable
      this.productService.createProduct(this.product).subscribe(
        // callback for receive data
        data => {
          this.router.navigate(['/admin/products'])
        },
        err=>{
          alert('Product could not be created')
        }
      );
    }
  }

  deleteProduct() {
    // ask user for confirmation
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.productService.delete(this.id).subscribe(
      product => {},
      error => {
        alert ('Error')
      },
      () => alert(`product deleted ${this.product.title}`)
    )
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {}
}
