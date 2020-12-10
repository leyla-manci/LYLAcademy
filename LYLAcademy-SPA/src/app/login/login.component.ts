/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../models/loginUser';
import { User } from '../models/User';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],kmk5458645
 m 
. 
})
export class LoginComponent  OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  loginUser: LoginUser;
  user: User;
  loginForm: FormGroup;

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  ngOnInit() {
  
    if (this.isAuthenticated) {
      this.router.navigateByUrl('/home');
    } else {
      this.createLoginForm();
    }
  }
  login() {
    if (this.loginForm.valid) {
      this.loginUser = Object.assign({}, this.loginForm.value);
      this.authService.login(this.loginUser);
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
