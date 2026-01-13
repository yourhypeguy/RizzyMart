import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';   
import { GreetingSection } from './greeting-section/greeting-section';
import { BestSellingContainer } from './best-selling-container/best-selling-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, GreetingSection, BestSellingContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RizzyMart');
}
