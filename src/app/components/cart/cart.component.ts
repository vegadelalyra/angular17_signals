import { Component, OnInit, effect } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

export interface CartItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  totalQty = 0;
  finalCart: CartItem[] = [];

  constructor(public cartService: CartService) {
    effect(
      () => {
        this.refreshCart();
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    // this.cartService.refreshCart.subscribe((res) => {
    //   this.refreshCart();
    // });
  }

  refreshCart() {
    this.totalPrice = 0;
    this.totalQty = 0;
    this.finalCart = [];
    let index = -1;
    for (const item of this.cartService.cart()) {
      this.totalPrice = this.totalPrice + item.price * item.qty;
      this.totalQty = this.totalQty + item.qty;
      index = this.finalCart.findIndex((x) => x.id === item.id);
      if (index > -1) {
        this.finalCart[index].qty++;
      } else {
        this.finalCart.push({ ...item });
      }
    }
    // this.cartService.totalValue = this.totalPrice;
    this.cartService.totalValue.set(this.totalPrice);
    // this.cartService.refreshHeader.next('');
  }

  closeCart() {
    // this.cartService.showCart.next(false);
    this.cartService.showCart.set(false);
  }
}
