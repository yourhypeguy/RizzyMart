import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 
import { FoodItems } from '../../component/food-items/food-items';
import { Product as ProductModel } from '../../models/product';
import { Product } from '../../services/product';



@Component({
  selector: 'app-food-main-page',
  imports: [CommonModule, FoodItems, ],
  templateUrl: './food-main-page.html',
  styleUrl: './food-main-page.css',
})
export class FoodMainPage implements OnInit {
  ngOnInit() {
  this.productService.getProducts().subscribe(products => {
    this.products = products;

    this.cdr.markForCheck();

    console.log('Food products received:', products);
  });
}

  constructor(
  private location: Location,
  private productService: Product,
  private cdr: ChangeDetectorRef
) {}

  goBack() {
    this.location.back();
  }

  products: ProductModel[] = [];

}
