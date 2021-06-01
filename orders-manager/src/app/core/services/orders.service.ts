import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';


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
    // --------------------------------------- Revisar como hacer la validación aca --------------------------------------
    return this.httpClient.get(this.apiUrl);
  }
}
