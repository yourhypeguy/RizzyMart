import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { FoodMainPage } from './pages/food-main-page/food-main-page';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Homepage},
    {path: 'food-main-page', component: FoodMainPage}
];
