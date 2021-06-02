import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderMocks } from 'src/app/mocks/orders.mocks';
import { Orders } from '../../models/Orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() orders: Orders[];
  @Output() editItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<any>();
  items: Orders[];


  constructor(private ordersService: OrdersService) {  }

  ngOnInit(): void {
  }

  toggleEditHandled(item: any): void{
    this.editItemEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.ordersService.delete(item._id).subscribe((res: Orders) => {
      const findedItem = this.orders.find((findItem) => {
        return findItem._id === item._id;
      });
      if (findedItem){
        findedItem.status = 'Deleted';
      }
  }, (err: any) => {
    console.log('Message: ' + err.message );
  });
}


}
