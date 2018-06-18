import { Response } from '@angular/http';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { DataTableResource } from "angular5-data-table";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  // products: Product[];
  products: Product[] = [];
  subscription:Subscription;
  //encapsulate the data into an object (generic class)
  tableResource: DataTableResource<Product>;
  itemCount:number;
  private search = new Subject();
  searchInput : any;

 
  constructor(private productService: ProductService) { 
  //   this.productService.getAllProducts()
  //   .subscribe(
  //     (products:Product[]) => 
  //       this.products = products,
  //       // console.log(products),
  //       // this.initializeTable(products);
  //     (error) => console.log(error)
  // );


  this.subscription = productService.getAll()
  .subscribe(products => {
    this.products = products;
    this.initializeTable(products)
});

}

 //Getting all the data into the data-table
  private initializeTable(products:Product[]){

    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset:0 })
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count =>this.itemCount = count)

  }

  //On page change or sort change
  reloadItems(params){

    if(!this.tableResource) return;

    this.tableResource.query(params)
    .then(items => this.items = items);

  }

  // filter(query:string){
  //   // console.log(query)
  //   let filteredProducts = (query) ? this.products.filter( p => p.title.toLowerCase().includes(query.toLowerCase())) : 
  //   this.products; 

  //   this.initializeTable(filteredProducts)
  // }




  ngOnInit() {
    // this.search.subscribe(data => {
    //   this.searchInput = data;
    // })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
