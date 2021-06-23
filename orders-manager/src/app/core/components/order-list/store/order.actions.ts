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

export const editOrder = createAction(
  '[Order] Edit Order',
  props<{ edittedOrder: Orders }>()
);

export const delOrder = createAction(
  '[Order] Delete Order',
  props<{ idOrder: string }>()
);

export const favOrder = createAction(
  '[Order] Mark Favourite Order',
  props<{ idOrder: string }>()
);

