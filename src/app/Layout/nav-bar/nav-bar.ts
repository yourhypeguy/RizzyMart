import { Component,HostListener } from '@angular/core';
import { MovingText } from '../moving-text/moving-text';
import { CommonModule } from '@angular/common'; 
import { CartItem } from '../../component/cart-item/cart-item';




@Component({
  selector: 'app-nav-bar',
  imports: [MovingText, CommonModule, CartItem],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

   isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

isCartOpen = false;

toggleCart() {

  this.isCartOpen = !this.isCartOpen;

  if(this.isCartOpen){

    document.body.style.overflow = 'hidden';

  }else{

    document.body.style.overflow = 'auto';

  }

}


closeCart(){

  this.isCartOpen = false;

  document.body.style.overflow = 'auto';

}
}
