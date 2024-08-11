import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass'],
})
export class AddItemComponent implements OnInit {
  @Output() addItemToCart = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.addItemToCart.emit();
    // this.cartService.refreshCart.next('');
  }
}
