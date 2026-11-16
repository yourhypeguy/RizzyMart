import { Component, signal, OnInit, OnDestroy, } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { Product as ProductModel } from '../../models/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',})
export class ProductPage implements OnInit, OnDestroy {

 constructor(
  private location: Location,
  private route: ActivatedRoute,
  private productService: Product,
  private cartService: Cart
) {}

 product: ProductModel | null = null;
 quantity: number = 1;

  goBack() {
    this.location.back();
  }

  increaseQuantity() {
    this.quantity++;
  }

decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

addToCart(): void {
  if (!this.product) {
    return;
  }

  for (let i = 0; i < this.quantity; i++) {
    this.cartService.addToCart(this.product);
  }
}

  images = [
    './assets/25kg_kingsOil.png',
    './assets/25kg_kingsOil.png',
    './assets/25kg_kingsOil.png',
    './assets/25kg_kingsOil.png',
  ];

  currentIndex = signal(0);

  intervalId: any;

  ngOnInit(): void {
  this.startAutoSlide();

  this.route.paramMap.subscribe(params => {
    const id = params.get('id');

    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          console.log('Selected product:', product);
        },
        error: (error) => {
          console.error('Failed to fetch product:', error);
        }
      });
    }
  });
}

  startAutoSlide() {

    this.intervalId = setInterval(() => {

      const next =
        (this.currentIndex() + 1) % this.images.length;

      this.currentIndex.set(next);

    }, 3000);

  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}