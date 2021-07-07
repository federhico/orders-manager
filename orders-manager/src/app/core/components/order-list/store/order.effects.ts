import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
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
              private store: Store<AppState>,
              public authService: AuthService) { }

  public loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(() =>
        this.httpClient.get<any>('http://localhost:3001/orders').pipe(
          map(res =>
            OrderActions.loadOrdersSuccess({ orderList: res.data.filter((x: any) => {
              return this.authService.user$.subscribe((user: any) => {
                return user.given_name === x.sender.name;
              });
            }) })
          ),
          catchError(err =>
            of(OrderActions.loadOrdersError({payload: err}))
          )
        )
      )
    )
  );

  public addOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.addOrder),
      mergeMap((actions) =>
        this.httpClient.post('http://localhost:3001/orders', actions.newOrder).pipe(
          map(res =>
            OrderActions.addOrderSuccess({newOrder: actions.newOrder})
          ),
          catchError(err =>
            of(OrderActions.addOrderError({payload: err}))
          )
        )
      )
    )
  );

  public editOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.editOrder),
      mergeMap((action) =>
        this.httpClient.put('http://localhost:3001/orders' + '/' + action.edittedOrder._id, action.edittedOrder ).pipe(
          map(res =>
            OrderActions.editOrderSuccess({ edittedOrder: action.edittedOrder })
          ),
          catchError(err =>
            of(OrderActions.editOrderError({payload: err}))
          )
        )
      )
    )
  );


}
