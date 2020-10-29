import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Teacher } from 'src/app/models/Teacher';
import { UserName } from 'src/app/models/UserName';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss'],
  providers: [TeacherService],
})
export class TeacherAddComponent implements OnInit {
  constructor(
    private teacherService: TeacherService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService
  ) {}
  teacher: Teacher = new Teacher();
  teacherAddForm: FormGroup;
  users: UserName[];

  createTeacherForm() {
    this.teacherAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      userName: ['', Validators.required],
      qualification: ['', Validators.required],
      compBranch: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getUserNameList();
    this.teacher.isDelete = 0;
    this.createTeacherForm();
  }
  getUserNameList() {
    this.userService.getUserByType(2).subscribe((data) => {
      this.users = data;
    });
  }

  add() {
    if (this.teacherAddForm.valid) {
      this.teacher = Object.assign({}, this.teacherAddForm.value);
      this.teacherService.add(this.teacher);
    }
  }
}
