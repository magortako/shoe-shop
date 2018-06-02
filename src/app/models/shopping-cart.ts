import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    //to easily iterate over all the items on the shopping cart
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId:string]: ShoppingCartItem }) {
        //initialize the items array based on the objects in the map
        for (let productId in itemsMap)
            this.items.push(itemsMap[productId]);
    }

    //property that gives the ID of all the products from the shopping cart
    // get productIds(){
    //     //return all the object properties as an array --Firbease: Items object and the keys
    //    return Object.keys(this.items)
    // }
    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
}