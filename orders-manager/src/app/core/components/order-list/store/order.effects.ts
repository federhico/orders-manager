import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { OrdersService } from 'src/app/core/services/orders.service';
import * as OrderActions from './order.actions';
import { ordersInitialState } from './order.reducer';

@Injectable()
export class OrdersEffects {

  constructor(private actions$: Actions,
              private orderService: OrdersService,
              private httpClient: HttpClient,
              private store: Store<AppState>) { }

  public loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(() =>
        this.httpClient.get<any>('http://localhost:3001/orders').pipe(
          map(res =>
            OrderActions.loadOrdersSuccess({ orderList: res.data })
          ),
          catchError(err =>
            of(OrderActions.loadOrdersError({payload: err}))
          )
        )
      )
    )
  );

  public addOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.addOrder),
      concatLatestFrom(action => this.store.select('orders')),
      tap(([action, orderCollection]) => {
          this.httpClient.post('http://localhost:3001/orders', orderCollection.orders[orderCollection.orders.length - 1])
          .subscribe((res: any) => {
            // Sin esto no funciona
            console.log('POSTED');
           });
      })
    ),
  { dispatch: false }
  );


  public editOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.editOrder),
      mergeMap((action) =>
        this.httpClient.put('http://localhost:3001/orders' + '/' + action.edittedOrder._id, action.edittedOrder ).pipe(
          map(res =>
            OrderActions.loadOrders()
          ),
          catchError(err =>
            of(OrderActions.loadOrdersError({payload: err}))
          )
        )
      )
    )
  );


}
