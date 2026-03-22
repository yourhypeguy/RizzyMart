import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItems } from '../food-items/food-items'; 


@Component({
  selector: 'app-house-hold-home-page',
  imports: [CommonModule, FoodItems],

  templateUrl: './house-hold-home-page.html',
  styleUrl: './house-hold-home-page.css',
})
export class HouseHoldHomePage {

}
