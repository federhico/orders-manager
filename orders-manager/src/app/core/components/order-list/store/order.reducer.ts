import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { Orders } from 'src/app/core/models/Orders';
import * as OrdersAction from './order.actions';


export const initialState: Orders[] = [     {
  _id: 'INICIAL',
  title: 'my beautifull order',
  description: 'Something about my order',
  status: 'On Hold',
  sender: {
      id: 100,
      name: 'Juan Arias'
  },
  destinationAddress: 'Saavedra 68',
  destinationCity: 'Villa Carlos Paz',
  destinationCountry: 'Argentina',
  destinationCoordinates: {
      lat: -123456,
      long: -54321
  },
  price: 100,
  taxApplied: 0,
  weight: 100,
  messureUnit: 'KG',
  createdOn: '2021-05-06:00:000:00',
  favourite: true
} ];
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
      console.log(state);
      console.log(orderList);
      return {

        ...state,
        orders: { ...state, list: orderList }
      };
    }
  ),
  on(OrdersAction.loadOrdersError, state => state),
  on(OrdersAction.addOrder, (state, { newOrder }) => {
    return [...state, newOrder];
  }),
  on(OrdersAction.editOrder, (state, { edittedOrder }) => {
    return state.map((item: Orders) => {
      if (item._id === edittedOrder._id) {
        return edittedOrder;
      }
      else{
        return item;
      }
    });
  }),


);

export function orderReducer(state: Orders[] | undefined, action: Action) {
  return _orderReducer(state, action);
}
