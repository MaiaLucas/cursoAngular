import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-card.service';

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
    //console.log('ShoppingComponente')
  }
}
