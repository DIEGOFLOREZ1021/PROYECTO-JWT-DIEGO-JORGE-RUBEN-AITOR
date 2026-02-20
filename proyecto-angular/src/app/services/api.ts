import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  getMe() {
    return this.http.get<User>(`${this.API_URL}/me`);
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }

  getAdminInfo() {
    return this.http.get(`${this.API_URL}/admin`);
  }

}
