import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { ScriptLoaderService } from '../services/script-loader.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private alertifyService:AlertifyService
  ) {}

 

  users: User[];
  ngOnInit() {
   
    
        this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    }
  }


  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  delete(userId) {
    this.userService.delete(userId).subscribe((data) => { 
      // this.router.navigateByUrl('/user');
       this.alertifyService.success('User deleted!');
     },
     (error) => {
         this.alertifyService.notify('delete process  failed.'+error, 'error');
       
     },
     ()=>{
      this.refresh();

     });
   
  }
}
