import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/core/models/Orders';
import { OrdersService } from 'src/app/core/services/orders.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filters: string[] = ['Recently Added', 'Favorites', 'Completed', 'Draft', 'Deleted', 'Shared'];
  orders: Orders[] = [];


  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  addToggleHandled(): void {
    return;
  }

  getOrders(): void {
    this.ordersService.get().subscribe((res: any) =>{
      console.log(res);
      this.orders = res.data;
    })
  }

}
