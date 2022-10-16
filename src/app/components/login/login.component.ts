import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSubscription: Subscription | any;
  isLoginSuccessful: boolean | null = null;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  get f() {
    return this.loginForm.controls;
  }

  sumbet(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    console.log("***user");
    this.loginSubscription = this.loginService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
      data => {

        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        console.log("error => :" + error);
      });

  }

}
