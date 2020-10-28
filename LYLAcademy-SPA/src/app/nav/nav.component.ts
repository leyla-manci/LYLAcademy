import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { User } from '../models/User';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}
  loginUser: LoginUser;
  user: User;
  ngOnInit() {}

  logOut() {
    this.authService.logOut();
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
