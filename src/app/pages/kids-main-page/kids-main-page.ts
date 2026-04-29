import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 
import { FoodItems } from '../../component/food-items/food-items';

@Component({
  selector: 'app-kids-main-page',
  imports: [CommonModule, FoodItems,  ],
  templateUrl: './kids-main-page.html',
  styleUrl: './kids-main-page.css',
})
export class KidsMainPage {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}

