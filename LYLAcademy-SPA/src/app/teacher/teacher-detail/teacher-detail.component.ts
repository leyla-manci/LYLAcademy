import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { UserName } from 'src/app/models/UserName';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss'],
  providers: [TeacherService],
})
export class TeacherDetailComponent implements OnInit {
  constructor(
    private teacherService: TeacherService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) {}
  teacher: Teacher = new Teacher();
  teacherEditForm: FormGroup;
  users: UserName[];

  createTeacherForm() {
    this.teacherEditForm = this.formBuilder.group({
      teacherId: [this.teacher.teacherId],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      userName: ['', Validators.required],
      qualification: ['', Validators.required],
      compBranch: ['', Validators.required],
      isDelete: [this.teacher.isDelete],
    });
  }
  ngOnInit() {
    this.getUserNameList();
    this.activatedRoute.params.subscribe((params) => {
      this.getTeacherById(params['teacherId']);
    });
    this.createTeacherForm();
  }
  getUserNameList() {
    this.userService.getUserByType(2).subscribe((data) => {
      this.users = data;
    });
  }

  save() {
    if (this.teacherEditForm.valid) {
      this.teacherService.save(this.teacher);
    }
  }

  getTeacherById(teacherId) {
    this.teacherService.getTeacherById(teacherId).subscribe((data) => {
      this.teacher = data;
    });
  }
}
