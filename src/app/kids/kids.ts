import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodItems } from '../food-items/food-items';

@Component({
  selector: 'app-kids',
  imports: [CommonModule, FormsModule, FoodItems],
  templateUrl: './kids.html',
  styleUrl: './kids.css',
})
export class Kids {

}
