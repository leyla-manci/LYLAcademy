/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
//import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
    private helper :JwtHelperService
  ) {}
 // path = 'https://localhost:44378/api/auth/';
  path = environment.baseUrl + '/auth/';
  userToken: any;
  decodeToken: any;
  TOKEN_KEY = 'token';
  defaultStr = '';
  //jwtHelper: JwtHelper = new JwtHelper();


 
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post<string>(this.path + 'login', loginUser, { headers: headers })
      .subscribe(
        (data) => {
          this.saveToken(data['resultString']);
          this.userToken = data['resultString'];
          //this.decodeToken = this.jwtHelper.decodeToken(data['resultString']);
          this.decodeToken = this.helper.decodeToken(data['resultString']);
          this.alertifyService.success('Login is successful.');
        },
        (error) => {
          if (!this.loggedIn()) {
            this.alertifyService.notify('Login failed.', 'error');
          }
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
          this.router.navigateByUrl('/home');
        }
      );
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe(
        (data) => {
          this.alertifyService.success('Register is successful.');
        },
        (error) => {
          this.alertifyService.notify('Register failed.' + error, 'error');
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
          this.router.navigateByUrl('/users');
        }
      );
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error('Logout is successful.');
  }
  loggedIn() {
   // return tokenNotExpired(this.TOKEN_KEY);
   return  !this.helper.isTokenExpired(this.token);
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get currentUserId() {
    if (this.token == null) {
      return '0';
    } else {
     // return this.jwtHelper.decodeToken(this.token).nameId;
     return this.helper.decodeToken(this.token).nameId;
    }
  }

  userName() {
    if (this.token == null) {
      return 'LYL Academy';
    } else {
      //return this.jwtHelper.decodeToken(this.token).userName;
      return this.helper.decodeToken(this.token).userName;
    }
  }
  isAdmin() {
    if (this.token == null) {
      return '0';
    } else {
      //return this.jwtHelper.decodeToken(this.token).isAdmin;
      return this.helper.decodeToken(this.token).isAdmin;
    }
  }
  isTeacher() {
    if (this.token == null) {
      return '0';
    } else {
     // return this.jwtHelper.decodeToken(this.token).isTeacher;
     return this.helper.decodeToken(this.token).isTeacher;
    }
  }
  isStudent() {
    if (this.token == null) {
      return '0';
    } else {
     // return this.jwtHelper.decodeToken(this.token).isStudent;
     return this.helper.decodeToken(this.token).isStudent;
    }
  }
}
