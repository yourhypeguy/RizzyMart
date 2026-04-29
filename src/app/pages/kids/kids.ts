import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodItems } from '../../component/food-items/food-items';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-kids',
  imports: [CommonModule, FormsModule, FoodItems, RouterLink],
  templateUrl: './kids.html',
  styleUrl: './kids.css',
})
export class Kids {

}
