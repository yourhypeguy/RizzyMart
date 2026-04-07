import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';   
import { GreetingSection } from './greeting-section/greeting-section';
import { BestSellingContainer } from './best-selling-container/best-selling-container';
import { FoodHomePage } from './food-home-page/food-home-page';
import { HouseHoldHomePage } from './house-hold-home-page/house-hold-home-page';
import { Kids } from './kids/kids';
import { ToiletHomePage } from './toilet-home-page/toilet-home-page';
import { RizzyDocumentation } from './rizzy-documentation/rizzy-documentation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, GreetingSection, BestSellingContainer, FoodHomePage, HouseHoldHomePage, Kids, ToiletHomePage, RizzyDocumentation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RizzyMart');
}
