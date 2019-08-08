import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  showPass = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.createForm();

    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.router.navigate(['home']);
      }
    });
  }

  private createForm() {
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEXP)]),
      password: new FormControl('', Validators.required),
    });
  }

  public onLoginSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      console.log("Form Is Valid");
      this.loginForm.reset()
      this.authService.login()
    }
  }

  forgotPass() {
    console.log("forgotPass clicked");
  }

}
