import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:3001/orders:';
  }

  get(): any{
    let data: Orders[];
    this.httpClient.get(this.apiUrl).subscribe((res: any) => {
      if (res.status === 200){
        data = res.data;
      }
      else{
        data = [];
      }
      return data;
    });
  }
}
