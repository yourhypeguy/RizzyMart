import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './Layout/nav-bar/nav-bar';   
import { GreetingSection } from './pages/greeting-section/greeting-section';
import { BestSellingContainer } from './pages/best-selling-container/best-selling-container';
import { FoodHomePage } from './pages/food-home-page/food-home-page';
import { HouseHoldHomePage } from './pages/house-hold-home-page/house-hold-home-page';
import { Kids } from './pages/kids/kids';
import { ToiletHomePage } from './pages/toilet-home-page/toilet-home-page';
import { RizzyDocumentation } from './pages/rizzy-documentation/rizzy-documentation';
import { FooterSection } from './Layout/footer-section/footer-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, GreetingSection, BestSellingContainer, FoodHomePage, HouseHoldHomePage, Kids, ToiletHomePage, RizzyDocumentation, FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RizzyMart');
}
