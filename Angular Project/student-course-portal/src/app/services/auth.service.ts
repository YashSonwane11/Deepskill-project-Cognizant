import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(true); // Mock logged in
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login() {
    this.isLoggedInSubject.next(true);
    localStorage.setItem('token', 'mock-jwt-token-12345');
  }

  logout() {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('token');
  }

  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
