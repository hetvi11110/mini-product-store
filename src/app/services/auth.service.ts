import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.isLoggedIn.asObservable();

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('auth', 'true');
      this.isLoggedIn.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('auth');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  checkAuthStatus() {
    const auth = localStorage.getItem('auth') === 'true';
    this.isLoggedIn.next(auth);
    return auth;
  }

}
