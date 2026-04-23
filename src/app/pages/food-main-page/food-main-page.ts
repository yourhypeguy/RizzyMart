import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItems } from '../../component/food-items/food-items';



@Component({
  selector: 'app-food-main-page',
  imports: [CommonModule, FoodItems, ],
  templateUrl: './food-main-page.html',
  styleUrl: './food-main-page.css',
})
export class FoodMainPage {

}
