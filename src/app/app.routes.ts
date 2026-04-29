import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { FoodMainPage } from './pages/food-main-page/food-main-page';
import { HouseHoldMainPage } from './pages/house-hold-main-page/house-hold-main-page';
import { KidsMainPage } from './pages/kids-main-page/kids-main-page';
import { ToiletMainPage } from './pages/toilet-main-page/toilet-main-page';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Homepage},
    {path: 'food-main-page', component: FoodMainPage},
    {path: 'house-hold-main-page', component: HouseHoldMainPage},
    {path: 'kids-main-page', component: KidsMainPage},
    {path: 'toilet-main-page', component: ToiletMainPage}
    
];
