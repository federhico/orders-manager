import { TestBed } from '@angular/core/testing';

import { OrderReduxService } from './order-redux.service';

describe('OrderReduxService', () => {
  let service: OrderReduxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderReduxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
