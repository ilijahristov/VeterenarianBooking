import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // API URL for backend
  private TOKEN_KEY = 'auth_token'; // key to store token in localStorage

  private userSubject = new BehaviorSubject<any>(this.decodeStoredToken()); // BehaviorSubject to store user data
  user$ = this.userSubject.asObservable(); // observable to track user data

  constructor(private http: HttpClient, private router: Router) {} // inject HttpClient and Router

  // login method to send login request to backend
  login(email: string, password: string) { 
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.TOKEN_KEY, res.token); // store token in localStorage
          this.userSubject.next(res.user);
        })
      );
  }

  // register method to send register request to backend
  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/register`, {name, email, password});
  }

  // logout method to remove token from localStorage and navigate to login page
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  // get token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // check if user is logged in
  isLoggedIn(): boolean {
    const token = this.getToken();
    if(!token) return false;

    // check if expired
    try{
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }

  // decode stored token
  private decodeStoredToken(): any {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if(!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem(this.TOKEN_KEY);
        return null;
      }
      return payload;
    } catch (error) {
      return null;
    }
  }
}
