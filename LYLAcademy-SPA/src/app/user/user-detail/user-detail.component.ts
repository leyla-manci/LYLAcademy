import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}
  user: User = new User();
  userEditForm: FormGroup;

  createUserForm() {
    this.userEditForm = this.formBuilder.group({
      userId:[this.user.userId],
      name: [this.user.name, Validators.required],
      password: [this.user.password, Validators.required],
      isTeacher: [this.user.isTeacher, Validators.required],
      isStudent: [this.user.isStudent, Validators.required],
      isAdmin: [this.user.isAdmin, Validators.required],
      isDelete:[this.user.isDelete]
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getUserById(params['userId']);
    });
    this.createUserForm();
  }

  save() {
    if (this.userEditForm.valid) {
     // this.user = Object.assign({}, this.userEditForm.value);
      this.userService.save(this.user);
    }
  }

  getUserById(userId) {
    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data;
    });
  }
}
