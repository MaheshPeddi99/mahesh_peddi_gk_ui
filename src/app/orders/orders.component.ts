import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any[];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.apiService.getOrders().subscribe(result => {
      this.orders = <any>result;
    }, (err: HttpErrorResponse) => {
      this.snackBar.open(err.message, '', {
        duration: 2000
      });
    })
  }

}
