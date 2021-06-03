import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Orders } from '../models/Orders';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl: string;

  constructor(private httpClient: HttpClient,
              public auth: AuthService) {
    this.apiUrl = 'http://localhost:3001/orders';
  }

  get(): any{
    return this.httpClient.get(this.apiUrl);
  }

  getOne(id: any): any {
    return this.httpClient.get(this.apiUrl + '/' +  id);
  }

  post(item: Orders): any {
    return this.httpClient.post(this.apiUrl, item);
  }

  put(item: Orders): any {
    return this.httpClient.put(this.apiUrl + '/' + item._id , item);
  }

  delete(itemId: string): any {
    return this.httpClient.delete(this.apiUrl + '/' + itemId);
  }

  errorHandler(err: HttpEvent<any>): Observable<HttpEvent<any>> {
    throw err;
  }

  responseHandler(res: any): Observable<Orders> {
    const order: Orders = res.data2;
    return of(order);
  }
}
