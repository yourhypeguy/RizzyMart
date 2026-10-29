import { Product } from '../../services/product';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingSection } from '../greeting-section/greeting-section';
import { BestSellingContainer } from '../best-selling-container/best-selling-container';
import { FoodHomePage } from '../food-home-page/food-home-page';
import { HouseHoldHomePage } from '../house-hold-home-page/house-hold-home-page';
import { Kids } from '../kids/kids';
import { ToiletHomePage } from '../toilet-home-page/toilet-home-page';
import { RizzyDocumentation } from '../rizzy-documentation/rizzy-documentation';
import { Product as ProductModel } from '../../models/product';``

@Component({
  selector: 'app-homepage',
  imports: [
    RouterOutlet,
    GreetingSection,
    BestSellingContainer,
    FoodHomePage,
    HouseHoldHomePage,
    Kids,
    ToiletHomePage,
    RizzyDocumentation
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  products: ProductModel[] = [];
  constructor(private productService: Product) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}