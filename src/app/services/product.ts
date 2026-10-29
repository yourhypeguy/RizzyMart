import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product as ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private apiUrl = 'http://localhost:3000/products';
   constructor(private http: HttpClient) {}
   getProducts() {
  return this.http.get<ProductModel[]>(this.apiUrl + '?category=Food');

}
}
