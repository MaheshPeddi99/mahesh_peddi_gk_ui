import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs'

import { UserInfo } from './models/userInfo.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor() { }
  public userInfoSubject = new BehaviorSubject<UserInfo>(null);
  public userInfo$ = this.userInfoSubject.asObservable();
  public setUserInfo = (data: UserInfo) => this.userInfoSubject.next(data);
}
