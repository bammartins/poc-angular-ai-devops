import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://api.example.com/products';

  constructor(private http: HttpClient) {}

  getProducts(category?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  updateStock(productId: number, quantity: number): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${productId}`, { stock: quantity });
  }
}