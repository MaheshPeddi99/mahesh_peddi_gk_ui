import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInfo } from './models/userInfo.model';
import { HierarchyWrapper } from './models/hierarchy.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = environment.base_url + '/ems/services/ResourceService';
  private create_customer_url = `${environment.ip}/gktest/createCustomer?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
  private get_orders_url = `${environment.ip}/gktest/getAllOrders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
  private hierarchy_URL = environment.base_url + '/ems/mvc/node-hierarchy-with-metadata';

  constructor(private httpClient: HttpClient) { }

  public getUserData(username: string, pwd: string): Observable<UserInfo> {
    let get_url = `${this.API_URL}/login?username=${username}&credential=${pwd}`;
    return this.httpClient.get(get_url).pipe(catchError(this.handleError)) as Observable<UserInfo>;
  }

  public logout(sessionKey: string): Observable<any> {
    let logout_url = `${this.API_URL}/logout?key=${sessionKey}`;
    return this.httpClient.get(logout_url).pipe(catchError(this.handleError)) as Observable<any>;
  }

  public setData(data) {
    return this.httpClient.post(this.create_customer_url, data).pipe(catchError(this.handleError));
  }

  public getOrders() {
    return this.httpClient.get(this.get_orders_url).pipe(catchError(this.handleError));
  }

  public getHierarchy(sessionKey: string): Observable<HierarchyWrapper> {
    return this.httpClient.get(`${this.hierarchy_URL}?key=${sessionKey}`).pipe(catchError(this.handleError)) as Observable<HierarchyWrapper>;
  }

  public handleError(error) {
    return throwError(error);
  }
}
