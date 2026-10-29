import { Component, OnInit } from '@angular/core';
import {  Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { FoodItems } from '../../component/food-items/food-items';
import { RouterLink } from "@angular/router";
import {Product as ProductModel} from "../../models/product";

@Component({
  selector: 'app-food-home-page',
  imports: [CommonModule, FoodItems, RouterLink],
  templateUrl: './food-home-page.html',
  styleUrl: './food-home-page.css',
})
export class FoodHomePage implements OnInit {
  products: ProductModel[] = [];
  
  constructor(private productService: Product) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
