import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderMocks } from 'src/app/mocks/orders.mocks';
import { Orders } from '../../models/Orders';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  // @Input() items: Orders[];
  @Output() editItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<any>();
  items: Orders[];

  constructor() {
    this.items = OrderMocks;
  }

  ngOnInit(): void {
  }

  toggleEditHandled(item: any): void{
    this.editItemEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.deleteItemEvent.emit(item);
  }

}
