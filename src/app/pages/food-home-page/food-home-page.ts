import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItems } from '../food-items/food-items';

@Component({
  selector: 'app-food-home-page',
  imports: [CommonModule, FoodItems],
  templateUrl: './food-home-page.html',
  styleUrl: './food-home-page.css',
})
export class FoodHomePage {

}
