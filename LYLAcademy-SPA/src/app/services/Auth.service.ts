import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  path = 'https://localhost:44378/api/auth/';
  userToken: any;
  decodeToken: any;
  TOKEN_KEY = 'token';
  jwtHelper: JwtHelper = new JwtHelper();
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post<string>(this.path + 'login', loginUser, { headers: headers })
      .subscribe((data) => {
        this.saveToken(data['resultString']);
        this.userToken = data['resultString'];
        this.decodeToken = this.jwtHelper.decodeToken(data['resultString']);
        this.alertifyService.success('Login is successful.');
        this.router.navigateByUrl('/home');
      });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe((data) => {
        this.alertifyService.success('Register is successful.');
        this.router.navigateByUrl('/course');
      });
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY);
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.token).nameId;
  }
}
