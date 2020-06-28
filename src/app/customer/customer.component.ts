import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customerForm = this.fb.group({
    customerName: [null, Validators.required],
    customerAge: [null, Validators.required],
    customerAddress: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private route: Router, private apiService: ApiService, private snackBar: MatSnackBar) { }

  public ngOnInit(): void { }

  public onSubmit(): void {
    this.apiService.setData(this.customerForm.value).subscribe(result => {
      this.resetForm();
      this.snackBar.open('Customer added successfully..', '', {
        duration: 2000
      });
    }, (err: HttpErrorResponse) => {
      this.snackBar.open(err.message, '', {
        duration: 5000
      });
    });
  }
  public resetForm(): void {
    this.snackBar.open('Reset Done..', '', {
      duration: 2000
    });
    this.customerForm.reset();
  }
}
