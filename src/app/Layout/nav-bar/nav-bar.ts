
import { Component, HostListener } from '@angular/core';
import { MovingText } from '../moving-text/moving-text';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../component/cart-item/cart-item';
import { RouterModule } from '@angular/router';
import { Cart, CartProduct } from '../../services/cart';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [MovingText, CommonModule, CartItem, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  isScrolled = false;
  isCartOpen = false;

 
  cartCount$!: Observable<number>;
   cartItems$!: Observable<CartProduct[]>;
   cartSubtotal$!: Observable<number>;
  
  constructor(private cartService: Cart) {
     this.cartCount$ = this.cartService.cartItems$.pipe(
    map(items =>
      items.reduce((total, item) => total + item.quantity, 0)
    )
  );
     this.cartItems$ = this.cartService.cartItems$;

      this.cartSubtotal$ = this.cartService.cartItems$.pipe(
      map(items =>
        items.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
        )
      )
    );
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;

    if (this.isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeCart() {
    this.isCartOpen = false;
    document.body.style.overflow = 'auto';
  }
}
