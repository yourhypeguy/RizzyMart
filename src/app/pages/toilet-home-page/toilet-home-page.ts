import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FoodItems } from '../food-items/food-items';


@Component({
  selector: 'app-toilet-home-page',
  imports: [CommonModule, FormsModule, FoodItems ],
  templateUrl: './toilet-home-page.html',
  styleUrl: './toilet-home-page.css',
})
export class ToiletHomePage {

}
