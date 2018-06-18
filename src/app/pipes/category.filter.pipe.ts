import { Product } from './../shared/models/product';
import { Pipe, Injectable, PipeTransform } from "@angular/core";


@Pipe ({
    name: 'filterCategories'
})

@Injectable()
    export class FilterCategories implements PipeTransform {
        transform(products: Product[], search: string){
            if (products.length > 0 && search){
                
                let foundProducts = products.filter(
                    product => 
                        product.title && product.title.toLowerCase().includes(search.toLowerCase())
                        ||
                        product.price && product.price.toString().includes(search)
                )
                return foundProducts;
            }
            return products;
        }
    }