import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  canActivate(): boolean {
    console.log(this.authService.isAuthenticated());
    if (!this.authService.isAuthenticated()) {
      console.log("Yes not loggedIn1");
      return true;
    } else {
      console.log("yes loggedIn2");
      this.router.navigate(['home']);
      return false;
    }
    // return this.authService.isAuthenticated();
  }
}
