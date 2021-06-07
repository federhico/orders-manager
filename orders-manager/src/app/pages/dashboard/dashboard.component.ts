import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(public ordersService: OrdersService,  private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  addToggleHandled(): void {
    this.router.navigate(['orderForm']);
  }

  getOrders(): void {
    this.ordersService.get().subscribe((res: any): void => {
      this.orders = res.data;
    });
  }

  editItem(item: any): void {
    // Renderizar el order-form Component
    this.router.navigate(['orderForm/' + item._id]);
  }



}
