import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItems } from '../../component/food-items/food-items';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-food-home-page',
  imports: [CommonModule, FoodItems, RouterLink],
  templateUrl: './food-home-page.html',
  styleUrl: './food-home-page.css',
})
export class FoodHomePage {

}
