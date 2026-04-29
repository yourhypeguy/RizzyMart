import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 
import { FoodItems } from '../../component/food-items/food-items';


@Component({
  selector: 'app-house-hold-main-page',
  imports: [CommonModule, FoodItems,  ],
  templateUrl: './house-hold-main-page.html',
  styleUrl: './house-hold-main-page.css',
})
export class HouseHoldMainPage {
   constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
