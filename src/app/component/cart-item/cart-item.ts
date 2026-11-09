import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Cart, CartProduct } from '../../services/cart';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: CartProduct;

  constructor(private cartService: Cart) {}

  increaseQuantity(): void {
    this.cartService.updateQuantity(this.item._id, 1);
  }

  decreaseQuantity(): void {
    this.cartService.updateQuantity(this.item._id, -1);
  }

  removeItem(): void {
  this.cartService.removeFromCart(this.item._id);
  }
}