import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { OrdersService } from 'src/app/core/services/orders.service';
import * as OrderActions from './order.actions';
import { initialState } from './order.reducer';

@Injectable()
export class OrdersEffects {

  constructor(private actions$: Actions,
              private orderService: OrdersService,
              private httpClient: HttpClient) { }

  public loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      concatMap(() =>
        this.httpClient.get<any>('http://localhost:3001/orders').pipe(
          map(res =>
            OrderActions.loadOrdersSuccess({ orderList: res.data })
          ),
          catchError(err =>
            of(OrderActions.loadOrdersError())
          )
        )
      )
    )
  );


}
