import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivationEnd } from '@angular/router';
import { tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import { ExchangeService } from './../exchange.service';
import { UserInfo } from './../models/userInfo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;
  public userInfo: UserInfo;
  public routeData: { showBack?: boolean, title?: string, showLoginInfo?: string };

  constructor(private router: Router, private location: Location, public exchangeService: ExchangeService) { }

  public ngOnInit(): void {
    combineLatest([this.router.events, this.exchangeService.userInfo$])
      .pipe(
        tap(
          ([routeInfo, userInfo]) => {
            if (userInfo) {
              this.userInfo = userInfo;
            }
            if (routeInfo instanceof ActivationEnd) {
              this.routeData = routeInfo.snapshot.data;
              if (!userInfo && routeInfo.snapshot.routeConfig.path !== 'login') {
                this.navigateTo('login');
              }
            }
          })
      ).subscribe();
  }
  public navigateTo(path: string): void {
    if (path === 'previous') {
      this.location.back();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
