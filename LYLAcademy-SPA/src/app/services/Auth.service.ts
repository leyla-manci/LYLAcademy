import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { JwtHelper } from 'angular2-jwt';
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
  jwtHelper: JwtHelper = new JwtHelper();
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'login', loginUser, { headers: headers })
      .subscribe((data) => {
        this.saveToken(data['tokenString']);
        this.userToken = data['tokenString'];
        this.decodeToken = this.jwtHelper.decodeToken(data['tokenString']);
        this.alertifyService.success('Login is successful.');
        this.router.navigateByUrl('/course');
      });
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }
  register(registerUser:RegisterUser){

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe((data) => {
        this.alertifyService.success('Register is successful.');
        this.router.navigateByUrl('/course');
      });

  }

  logOut(){

    
  }
}
