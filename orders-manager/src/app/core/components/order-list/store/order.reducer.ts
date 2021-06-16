import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { Orders } from 'src/app/core/models/Orders';
import * as OrdersAction from './order.actions';


export const initialState: Orders[] = [];
export const ordersFeatureKey = 'State';
export interface OrdersState {
  orders: Orders[];
}

// tslint:disable-next-line: variable-name
export const _orderReducer = createReducer(
  initialState,
  // tslint:disable-next-line: no-shadowed-variable
  on(OrdersAction.loadOrders, state => state),
  on(
    OrdersAction.loadOrdersSuccess,
    (state, { orderList }) => {
      return {
        ...state,
        orders: { ...state, list: orderList }
      };
    }
  ),
  on(OrdersAction.loadOrdersError, state => state),
  on(OrdersAction.addOrder, (state, { newOrder }) => {
    return [...state, newOrder];
  })


);

export function orderReducer(state: Orders[] | undefined, action: Action) {
  return _orderReducer(state, action);
}
