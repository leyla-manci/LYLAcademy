import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  providers: [UserService],
})
export class UserAddComponent implements OnInit {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}
  user: User = new User();
  userAddForm: FormGroup;

  createUserForm() {
    this.userAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      isTeacher: [this.user.isTeacher, Validators.required],
      isStudent: [this.user.isStudent, Validators.required],
      isAdmin: [this.user.isAdmin, Validators.required],
    });
  }
  ngOnInit() {
    this.user.isAdmin = 1;
    this.user.isDelete = 0;
    this.user.isStudent = 0;
    this.user.isTeacher = 0;
    this.createUserForm();
  }

  add() {
    if (this.userAddForm.valid) {
      this.user = Object.assign({}, this.userAddForm.value);
      this.userService.add(this.user);
    }
  }
}
