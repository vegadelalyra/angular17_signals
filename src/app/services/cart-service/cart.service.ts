import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from 'src/app/components/cart/cart.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // cart: CartItem[] = [];
  cart = signal<CartItem[]>([]);
  // showCart = new BehaviorSubject(false);
  showCart = signal(false);
  // refreshCart = new Subject();
  refreshCart = signal([]);
  // totalValue = 0;
  totalValue = signal(0);
  // refreshHeader = new Subject();
  refreshHeader = signal([]);

  constructor() {}
}
