import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';   
import { GreetingSection } from './greeting-section/greeting-section';
import { BestSellingContainer } from './best-selling-container/best-selling-container';
import { FoodHomePage } from './food-home-page/food-home-page';
import { HouseHoldHomePage } from './house-hold-home-page/house-hold-home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, GreetingSection, BestSellingContainer, FoodHomePage, HouseHoldHomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RizzyMart');
}
