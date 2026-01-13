import { Component, signal, OnInit, OnDestroy, NgZone } from '@angular/core';


@Component({
  selector: 'app-best-selling-container',
  imports: [],
  templateUrl: './best-selling-container.html',
  styleUrl: './best-selling-container.css',
})
export class BestSellingContainer implements OnInit, OnDestroy {
  //list of products
products = [
  {image: '', price: 29.99},
  {image: '', price: 40.99},
  {image: '', price: 89.99},
];

//track which product is showing
currentIndex = signal(0);

//interval reference (IMPORTANT FOR STOPPING MEMORY LEAKS)
intervalId: any;

constructor(private ngZone: NgZone) {}

ngOnInit() {
  this.startAutoSlide();
}

ngOnDestroy() { 
  clearInterval(this.intervalId);
}

//automatically change product every 3 seconds
startAutoSlide() {
  this.intervalId= setInterval(() => {
    this.nextProduct();
  }, 3000);
}

//move to next product
nextProduct() {
this.currentIndex.update(i => (i + 1) % this.products.length);
}

//arrow to previous product
prevProduct() {
  this.currentIndex.update(i => (i - 1 + this.products.length) % this.products.length); 
}
}
