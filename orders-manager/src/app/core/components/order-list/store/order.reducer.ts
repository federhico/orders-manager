import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { Orders } from 'src/app/core/models/Orders';
import * as OrdersAction from './order.actions';



export const ordersFeatureKey = 'State';
export const ordersInitialState: OrdersState = {
  orders: [],
  error: null
};
export interface OrdersState {
  orders: Orders[];
  error: any;
}


// tslint:disable-next-line: variable-name
export const _orderReducer = createReducer(
  // initialState,
  ordersInitialState,
  // tslint:disable-next-line: no-shadowed-variable
  on(OrdersAction.loadOrders, state => state),
  on(
    OrdersAction.loadOrdersSuccess,
    (state, { orderList }) => ({
      ...state,
      orders: [...orderList],
      error: null
    })),
  on(OrdersAction.loadOrdersError, (state, { payload }) => ({
    ...state,
    error: payload
  })),

  on(OrdersAction.addOrder, state => state),
  on(OrdersAction.addOrderSuccess, (state, { newOrder }) => ({
    ...state,
    orders: [...state.orders, newOrder],
    error: null
  })),
  on(OrdersAction.addOrderError, (state, { payload }) => ({
    ...state,
    error: payload
  })),

  on(OrdersAction.editOrder, state => state),
  on(OrdersAction.editOrderSuccess, (state, { edittedOrder }) => ({
    ...state,
    orders: state.orders.map((item: Orders) => {
      if (item._id === edittedOrder._id) {
        return edittedOrder;
      }
      else {
        return item;
      }
    }),
    error: null
  })),
  on(OrdersAction.editOrderError, (state, { payload }) => ({
    ...state,
    error: payload
  })),

  on(OrdersAction.delOrder, (state, { idOrder }) => ({
    ...state,
    orders: state.orders.map((item: Orders) => {
      if (item._id === idOrder) {
        item.status = 'Deleted';
      }
      return item;
    }),
    error: null
  })),


  on(OrdersAction.favOrder, (state, { idOrder }) => ({
    ...state,
    orders: state.orders.map((item: Orders) => {
      if (item._id === idOrder) {
        item.favourite = !item.favourite;
      }
      return item;
    }),
    error: null
  })),
  on(OrdersAction.searchOrder, (state, { title, orders }) => ({
    ...state,
    orders: orders.filter((item: Orders) => {
      if (item.title.includes(title)) {
        return item;
      }
      return;
    }),
    error: null
  }))

);

export function orderReducer(state: OrdersState | undefined, action: Action) {
  return _orderReducer(state, action);
}
