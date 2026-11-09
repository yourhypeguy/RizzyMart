import { Component,Input } from '@angular/core';
import {DecimalPipe} from "@angular/common";
import { Product as ProductModel } from '../../models/product';
import { Cart } from '../../services/cart';

@Component({
  standalone: true,   // 
  selector: 'app-food-items',
  imports: [DecimalPipe],
  templateUrl: './food-items.html',
  styleUrl: './food-items.css',
})
export class FoodItems {
  @Input() product!: ProductModel;
    constructor(private cartService: Cart) {}

    addToCart(): void {
  console.log('1. ADD TO CART CLICKED');

  this.cartService.addToCart(this.product);

  console.log('2. PRODUCT SENT TO CART SERVICE');
}

  // addToCart(): void {
  //   this.cartService.addToCart(this.product);
  //   console.log(this.product.name + ' added to cart');
  // }
}
