import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-card/shopping-card.service";
import { CartItem } from "app/restaurant-detail/shopping-card/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) {}   

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

}