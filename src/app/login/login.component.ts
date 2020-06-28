import { HttpErrorResponse } from '@angular/common/http';
import { ExchangeService } from './../exchange.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private route: Router, private apiService: ApiService, private exchangeService: ExchangeService, private snackBar: MatSnackBar) { }

  public ngOnInit(): void {
    this.removeSession();
  }
  public onSubmit(): void {
    this.apiService.getUserData(this.loginForm.value.username, this.loginForm.value.password).subscribe(result => {
      const token = result.key;
      if (token) {
        sessionStorage.setItem('key', token);
        this.exchangeService.setUserInfo(result);
        this.route.navigate(['/content']);
      } else {
        this.removeSession();
        this.snackBar.open('Unexpected Error Occurred..', '', {
          duration: 2000
        });
      }
    }, (err: HttpErrorResponse) => {
      this.removeSession();
      this.snackBar.open(err.message, '', {
        duration: 2000
      });
    });
  }
  public removeSession(): void {
    const sessionKey = sessionStorage.getItem('key');
    if (sessionKey) {
      this.apiService.logout(sessionKey)
        .subscribe(result => {
          sessionStorage.removeItem('key');
          this.exchangeService.setUserInfo(null);
        });
    }
  }
}
