import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response.model';
import { TokenPayload } from '../models/token-payload.model';
import { User } from '../models/user.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:3001/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, {
      email,
      password
    }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  decodeToken(): TokenPayload | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  getRole(): string | null {
    const payload = this.decodeToken();
    return payload ? payload.role : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}