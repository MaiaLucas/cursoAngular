import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-card/shopping-card.service";
import { CartItem } from "app/restaurant-detail/shopping-card/cart-item.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import "rxjs/operator/map";
import { Order } from "./order.model";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: HttpClient) {}   

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

    clear() {
        this.cartService.clear()
    }

    checkOrder(order:Order): Observable<string> {

        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                        .map(order=> order.id)
                        
    }

}