import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './Layout/nav-bar/nav-bar';
import { FooterSection } from './Layout/footer-section/footer-section';
import { MovingText } from './Layout/moving-text/moving-text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, FooterSection, MovingText],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RizzyMart');
}
