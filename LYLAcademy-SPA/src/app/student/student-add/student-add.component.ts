import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Student } from 'src/app/models/Student';
import { UserName } from 'src/app/models/UserName';
import { AlertifyService } from 'src/app/services/alertify.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss'],
  providers:[StudentService]
})
export class StudentAddComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertifyService:AlertifyService
  ) {}
  student: Student = new Student();
  studentAddForm: FormGroup;
   users : UserName[];

  createStudentForm() {
    this.studentAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });

  
  }
  ngOnInit() {
    this.getUserNameList()
    this.student.isDelete = 0;
    this.createStudentForm();
  
  }
  getUserNameList(){
    this.userService.getUserByType(1).subscribe(data=>{
      this.users = data;
    });

  }

  add() {
    if (this.studentAddForm.valid) {
      this.student = Object.assign({}, this.studentAddForm.value);
      this.studentService.add(this.student);
    }
  }

}
