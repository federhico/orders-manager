import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/core/models/Orders';
import * as OrderActions from './order.actions';
import { OrdersState } from './order.reducer';
import * as OrdersSelectors from './order.selector';

@Injectable({
  providedIn: 'root'
})
export class OrderReduxService {

  constructor(private store: Store<Orders>) { }

  public loadOrders(): void {
    this.store.dispatch(OrderActions.loadOrders());
  }

  public getOrderList$(): Observable<OrdersState> {
    return this.store.select(OrdersSelectors.getOrdersList);
  }
}
