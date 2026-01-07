import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number) {
    // Problema 1: Não trata se o ID for negativo ou zero
    // Problema 2: Não trata erro 404 ou 500 da API
    return this.http.get(`https://api.example.com/users/${id}`);
  }
}