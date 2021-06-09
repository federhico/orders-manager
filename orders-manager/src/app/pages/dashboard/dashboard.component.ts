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

  filters: string[] = ['All', 'Recently Added', 'Favourites', 'On Hold', 'Urgent', 'Deleted'];
  orders: Orders[] = [];
  ordersFiltered: Orders[] = [];


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
      this.ordersFiltered = this.orders;
    });
  }

  editItem(item: any): void {
    // Renderizar el order-form Component
    this.router.navigate(['orderForm/' + item._id]);
  }

  filterItem(filter: string): void {
    switch (filter) {
      case 'Recently Added': {
        const arrayDate = this.orders.map((item: Orders) => {
          return new Date(item.createdOn);
        });
        const maxDate = arrayDate.sort()[arrayDate.length - 3].getTime();
        this.ordersFiltered = this.orders.filter((item: Orders) => {
          return new Date(item.createdOn).getTime() >= maxDate;
        });
        break;
      }
      case 'Favourites': {
        this.ordersFiltered = this.orders.filter((item: Orders) => {
          return item.favourite;
        });
        break;

      }
      case 'Deleted': {
        this.ordersFiltered = this.orders.filter((item: Orders) => {
          return item.status === 'Deleted';
        });
        break;
      }
      case 'On Hold': {
        this.ordersFiltered = this.orders.filter((item: Orders) => {
          const status: string = item.status;
          return status === 'On Hold';
        });
        break;
      }
      case 'Urgent': {
        this.ordersFiltered = this.orders.filter((item: Orders) => {
          return escape(item.status) === '%u200CUrgent';
        });
        break;
      }
      default:
        this.ordersFiltered = this.orders;
        break;
    }
  }
}
