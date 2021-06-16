import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Orders } from 'src/app/core/models/Orders';
import { ordersFeatureKey, OrdersState } from './order.reducer';

export const getOrdersState = createFeatureSelector<OrdersState>(
  ordersFeatureKey
);

export const getOrdersList = createSelector(
  getOrdersState,
  (state: OrdersState) => state
);
