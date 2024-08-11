import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CartService } from './services/cart-service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'angular17_signals';

  count = signal(0);
  colors = signal(['Red', 'Green']);
  length = signal(20);
  breadth = signal(40);
  area = computed(() => this.length() * this.breadth());

  a = signal(10);
  b = signal(20);
  c = computed(() => this.a() + this.b());

  constructor(public cartService: CartService) {
    effect(() => {
      console.log('Effect due to count signal is triggered', this.count());
    });
    effect(() => {
      console.log('Effect due to color signal is triggered', this.colors());
    });
  }

  ngOnInit(): void {
    console.log(this.c());
    this.a.set(50);
    console.log(this.c());
  }

  increase() {
    this.count.update((value) => value + 1);
    this.colors.update((values) => [...values, 'Blue']);
    // this.length.set(30);
    // console.log(this.colors());
  }
}
