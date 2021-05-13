import { Component, Input, OnInit } from '@angular/core';
import { OrderMocks } from 'src/app/mocks/orders.mocks';
import { Orders } from '../../models/Orders';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  // @Input() items: Orders[];
  items: Orders[];

  constructor() {
    this.items = OrderMocks;
  }

  ngOnInit(): void {
  }

}
