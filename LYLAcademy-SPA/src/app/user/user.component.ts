import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  MyDataSource: any;
  displayedColumns = ['userId','name','password','isStudent','isTeacher','isAdmin','actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private _script: ScriptLoaderService
  ) {}

  users: User[];
  ngOnInit() {
  
    this.refresh();
  }


  refresh() {
  //  this._script.loadScriptsManuel();
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      this.RenderDataTable(this.users);
      });
    }
  }
  
  RenderDataTable(userdata) {
  
    this.MyDataSource = new MatTableDataSource();
    this.MyDataSource.data = userdata;
    this.MyDataSource.sort = this.sort;
    this.MyDataSource.paginator = this.paginator;
    console.log(this.MyDataSource.data);
  }
  Filter(searchstring:string)
  {
    searchstring = searchstring.trim(); 
    searchstring = searchstring.toLowerCase();
    this.MyDataSource.filter = searchstring;
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  delete(userId) {
    this.userService.delete(userId).subscribe(
      (data) => {
        // this.router.navigateByUrl('/user');
        this.alertifyService.success('User deleted!');
      },
      (error) => {
        this.alertifyService.notify('delete process  failed.' + error, 'error');
      },
      () => {
        this.refresh();
      }
    );
  }
}
