import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {
  cart: CartItem[] = [];

  @Input() item: CartItem | any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    // this.cartService.cart.push(this.item)
    this.cartService.cart.mutate((items: CartItem[]) => items.push(this.item));
  }
}
