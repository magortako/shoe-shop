//THIS IS WHERE WE CALCULATE THE QUANTITY OF PRODUCTS

import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    //to easily iterate over all the items on the shopping cart
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId:string]: ShoppingCartItem }) {
        //initialize the items array based on the objects in the map
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap){
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem({
                ...item,
                $key:productId
            }))
        };
    }
      
  //Find the quantity of a specific product card
  getQuantity(product: Product){
      
    //a reference to the shopping cart item 
    let item = this.itemsMap[product.$key];
    //if there is no item with a key
    return item ? item.quantity : 0;

  }

    get totalPrice (){
        let sum = 0;
        for(let productId in this.items)
            sum += this.items[productId].totalPrice;
            return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
}