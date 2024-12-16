import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loggedIn: boolean = true;
  canActivate() {
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  constructor(private router: Router) {}

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
