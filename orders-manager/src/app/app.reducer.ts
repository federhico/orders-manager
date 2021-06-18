import { ActionReducerMap } from '@ngrx/store';
import { orderReducer } from './core/components/order-list/store/order.reducer';
import { Orders } from './core/models/Orders';


export interface AppState {
  orders: Orders [];

}

export const appReducers: ActionReducerMap<AppState> = {
  orders: orderReducer
};

