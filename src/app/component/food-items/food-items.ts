import { Component,Input } from '@angular/core';
import {DecimalPipe} from "@angular/common";
import { Product as ProductModel } from '../../models/product';

@Component({
  standalone: true,   // 
  selector: 'app-food-items',
  imports: [DecimalPipe],
  templateUrl: './food-items.html',
  styleUrl: './food-items.css',
})
export class FoodItems {
  @Input() product!: ProductModel;
}
