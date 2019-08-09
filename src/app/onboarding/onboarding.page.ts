import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLoginClick() {
    this.router.navigate(['login']);
  }
  handleJoinClick() {
    this.router.navigate(['register']);
  }
  handleGoogleLogin() {
    this.router.navigate(['login']);
  }
  handleFacebookLogin() {
    this.router.navigate(['login']);
  }
}
