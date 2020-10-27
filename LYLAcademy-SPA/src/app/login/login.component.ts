import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { LoginUser } from '../models/loginUser';
import { User } from '../models/User';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  loginUser: LoginUser;
  user: User;
  loginForm: FormGroup;

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.createLoginForm();
  }
  login() {
    if (this.loginForm.valid) {
      this.loginUser = Object.assign({}, this.loginForm.value);
      this.authService.login(this.loginUser);
    }
  }
}
