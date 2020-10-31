import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { User } from '../models/User';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private userService: UserService
  ) {
    this.userN = "LYL Academy";
  }

  loginUser: LoginUser;
  userN :string;
  user:User;
  ngOnInit() {
    this.CurrentUserInfo(this.authService.currentUserId);
    if(this.currentUserName != null)
    {
      this.userN =this.currentUserName;

    }
  }

  logOut() {
    this.authService.logOut();
  }



  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  get currentUserName() {
    return this.authService.userName();
  }
 
  get isAdminUser() {
    return this.authService.isAdmin();
  }
  get isTeacherUser() {
    return this.authService.isTeacher();
  }
  get isStudentUser() {
    return this.authService.isStudent();
  }

  CurrentUserInfo(userInf) {
    this.userService.getUserById(userInf).subscribe((data) => {
      this.user = data;
    });
  }
}
