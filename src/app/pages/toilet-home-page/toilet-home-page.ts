import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FoodItems } from '../../component/food-items/food-items';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-toilet-home-page',
  imports: [CommonModule, FormsModule, FoodItems, RouterLink],
  templateUrl: './toilet-home-page.html',
  styleUrl: './toilet-home-page.css',
})
export class ToiletHomePage {

}
