import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  loginError: boolean = false;

  // create instance of AuthService
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin(): void {
    // call login() method in AuthService to validate login creds
    if (this.authService.login(this.userName, this.password)) {
      this.loginError = false;
      // load books "page"
      this.router.navigate(['books'], {
        queryParams: { username: this.userName },
      });
    } else {
      this.loginError = true;
    }
  }
}
