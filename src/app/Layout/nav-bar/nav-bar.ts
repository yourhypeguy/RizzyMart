import { Component,HostListener } from '@angular/core';
import { MovingText } from '../moving-text/moving-text';


@Component({
  selector: 'app-nav-bar',
  imports: [MovingText],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

   isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

}
