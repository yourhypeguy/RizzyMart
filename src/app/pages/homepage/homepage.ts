import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingSection } from '../greeting-section/greeting-section';
import { BestSellingContainer } from '../best-selling-container/best-selling-container';
import { FoodHomePage } from '../food-home-page/food-home-page';
import { HouseHoldHomePage } from '../house-hold-home-page/house-hold-home-page';
import { Kids } from '../kids/kids';
import { ToiletHomePage } from '../toilet-home-page/toilet-home-page';
import { RizzyDocumentation } from '../rizzy-documentation/rizzy-documentation';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterOutlet,
    GreetingSection,
    BestSellingContainer,
    FoodHomePage,
    HouseHoldHomePage,
    Kids,
    ToiletHomePage,
    RizzyDocumentation
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
