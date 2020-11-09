/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserName } from '../models/UserName';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(
  private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router) { }


 // path = 'https://localhost:44378/api/';
  path = environment.baseUrl + '/';

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.path + 'users');
  }
  getUserById(userId): Observable<User> {
    return this.httpClient.get<User>(this.path + 'users/' + userId);
  }


  getUserByType(userType): Observable<UserName[]> {
    //userType 0:admin 1:student 2:teacher
    return this.httpClient.get<UserName[]>(this.path + 'users/byType/' + userType);
  }

  add(user) {
    this.httpClient.post(this.path + 'users', user).subscribe((data) => {
    //  this.router.navigateByUrl('userDetail/'+data['userId']);
    this.router.navigateByUrl('/user');
      this.alertifyService.success('User creation is successful!');
        },
        (error) => {
            this.alertifyService.notify('Creation failed.'+error, 'error');
          
        });
  }
  save(user){
    this.httpClient.put(this.path + 'users/'+user.userId, user).subscribe((data) => { 
      this.router.navigateByUrl('/user');
      this.alertifyService.success('User updated!');
    },
    (error) => {
        this.alertifyService.notify('Update process  failed.'+error, 'error');
      
    });
  }
  delete(userId){
    return this.httpClient.delete(this.path + 'users/'+userId);
  }

}
