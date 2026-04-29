import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 
import { FoodItems } from '../../component/food-items/food-items';

@Component({
  selector: 'app-toilet-main-page',
  imports: [ CommonModule, FoodItems,  ],
  templateUrl: './toilet-main-page.html',
  styleUrl: './toilet-main-page.css',
})
export class ToiletMainPage {
constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
