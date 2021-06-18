import { ActionReducerMap } from '@ngrx/store';
import { orderReducer, OrdersState } from './core/components/order-list/store/order.reducer';



export interface AppState {
  orders: OrdersState;

}

export const appReducers: ActionReducerMap<AppState> = {
  orders: orderReducer
};

