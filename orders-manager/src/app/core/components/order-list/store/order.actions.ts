import { createAction, props } from '@ngrx/store';
import { Orders } from '../../../models/Orders';

export const loadOrders = createAction(
  '[Order] Get Orders'
);

export const loadOrdersSuccess = createAction(
  '[Order] Get Orders Success',
  props<{ orderList: Orders[] }>()
);

export const loadOrdersError = createAction(
  '[Order] Get Orders Error',
  props<{ payload: any }>()
);

export const addOrder = createAction(
  '[Order] Add Order',
  props<{ newOrder: Orders }>()
);

export const addOrderSuccess = createAction(
  '[Order] Add Order Success',
  props<{ newOrder: Orders }>()
);

export const addOrderError = createAction(
  '[Order] Add Order Error',
    props<{ payload: any }>()
);

export const editOrder = createAction(
  '[Order] Edit Order',
  props<{ edittedOrder: Orders }>()
);
export const editOrderSuccess = createAction(
  '[Order] Edit Order Success',
  props<{ edittedOrder: Orders }>()
);
export const editOrderError = createAction(
  '[Order] Edit Order Error',
  props<{ payload: any }>()
);

export const delOrder = createAction(
  '[Order] Delete Order',
  props<{ idOrder: string }>()
);

export const favOrder = createAction(
  '[Order] Mark Favourite Order',
  props<{ idOrder: string }>()
);

