import { Product } from 'shared/models/product';
import { Pipe, Injectable, PipeTransform } from "@angular/core";

@Pipe ({
    name:'categoryFilter'
})

@Injectable()
export class CategoryFilter implements PipeTransform {
    transform(categories: Product[], search:string){

        if ( categories  ){

            let foundCategories = categories.filter(
                product =>
                    product.category && product.category.toLowerCase().includes(search.toLowerCase())
            )
            return foundCategories;
        }
        return categories;
    }
}