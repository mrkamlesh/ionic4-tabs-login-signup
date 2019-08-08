import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  canActivate(): boolean {
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
    // return this.AuthService.isAuthenticated();
  }

  canActivateChild(): boolean {
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
    // return this.AuthService.isAuthenticated();
  }

}
