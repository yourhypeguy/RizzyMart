import {
  Component,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit, OnDestroy {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
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