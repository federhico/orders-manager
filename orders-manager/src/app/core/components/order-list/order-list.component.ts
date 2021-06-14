import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() favouriteItemEvent = new EventEmitter<any>();



  constructor(private ordersService: OrdersService) {  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(): void {
    this.orders.sort((a: any) => a.status === 'Deleted' ? 0 : -1);
    this.orders.map((dateStr: Orders) => {
      const date = dateStr.createdOn.substring(0, 10);
      const time = dateStr.createdOn.substring(11, 18);
      const millisecond = dateStr.createdOn.substring(19);
      const validDate = date + 'T' + time + '.' + millisecond;
      return validDate;

    });
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

toggleFavouriteHandled(item: Orders): void {
  item.favourite = !item.favourite;
  this.ordersService.post(item).subcribe((res: Orders) => {
    const findItem = this.orders.find((elem) => {
      return elem._id === item._id;
    });
    if (findItem) {
      findItem.favourite = !findItem.favourite;
    }
  }, (err: any) => {
    console.error('Error message: ' + err.message);
  });
}

}
