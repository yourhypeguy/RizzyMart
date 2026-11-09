
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product as ProductModel } from '../models/product';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


export interface CartProduct extends ProductModel {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private cartItems = new BehaviorSubject<CartProduct[]>([]);

  cartItems$ = this.cartItems.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {

      if (isPlatformBrowser(this.platformId)) {

        const savedCart = localStorage.getItem('rizzyMartCart');

        if (savedCart) {
          try {
            this.cartItems.next(JSON.parse(savedCart));
          } catch {
            localStorage.removeItem('rizzyMartCart');
          }
        }

        this.cartItems.subscribe(items => {
          localStorage.setItem('rizzyMartCart', JSON.stringify(items));
        });

      }
  }

  addToCart(product: ProductModel): void {
    const currentItems = this.cartItems.getValue();

    const existingProduct = currentItems.find(
      item => item._id === product._id
    );

    if (existingProduct) {
      const updatedItems = currentItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      this.cartItems.next(updatedItems);
    } else {
      this.cartItems.next([
        ...currentItems,
        { ...product, quantity: 1 }
      ]);
    }
  }

  removeFromCart(productId: string): void {
    const updatedItems = this.cartItems.getValue().filter(
      item => item._id !== productId
    );

    this.cartItems.next(updatedItems);
  }

  updateQuantity(productId: string, change: number): void {
  const updatedItems = this.cartItems.getValue()
    .map(item =>
      item._id === productId
        ? { ...item, quantity: item.quantity + change }
        : item
    )
    .filter(item => item.quantity > 0);

  this.cartItems.next(updatedItems);
  }

  getCartCount(): number {
    return this.cartItems.getValue().reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}

