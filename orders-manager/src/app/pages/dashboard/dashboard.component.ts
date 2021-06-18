import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Orders } from 'src/app/core/models/Orders';
import { OrdersService } from 'src/app/core/services/orders.service';
import * as OrderActions from '../../core/components/order-list/store/order.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: Orders[] = [];
  ordersFiltered: Orders[] = [];
  filter: any = [
    { name: 'All', value: 0 },
    { name: 'Recently Added', value: 0 },
    { name: 'Favourites', value: 0 },
    { name: 'On Hold', value: 0 },
    { name: 'Urgent', value: 0 },
    { name: 'Deleted', value: 0 }
  ];


  constructor(public ordersService: OrdersService,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.getOrders();
    this.store.select('orders').subscribe(res => {
      this.orders = res;
      this.ordersFiltered = this.orders;
      // Revisar esto.
      this.filter.map((item: any) => {
        if (item.name === 'All') {
          return item.value = this.orders.length;
        }
        return;
      });
      this.countItemFilters();
    });


  }

  addToggleHandled(): void {
    this.router.navigate(['orderForm']);
  }

  countValue(filterName: string): void {
    this.filter.map((item: any) => {
      if (item.name === filterName) {
        return item.value += 1;
      }
    });
  }

  getOrders(): void {
    this.ordersService.get().subscribe((res: any): void => {
      this.orders = res.data;
      this.ordersFiltered = this.orders;
      // Revisar esto.
      this.filter.map((item: any) => {
        if (item.name === 'All') {
          return item.value = this.orders.length;
        }
        return;
      });
      this.countItemFilters();
    });
  }

  editItem(item: any): void {
    // Renderizar el order-form Component
    this.router.navigate(['orderForm/' + item._id]);
  }

  countItemFilters(): void {
    // ------------------ hay un problema cuando agrego el favorito no me va a cambiar el contador de fav xq
    // marcar como fav está en un componente hijo. --> Redux??
    const arrayDate = this.orders.slice().map((item: Orders) => {
      return new Date(item.createdOn);
    });
    const maxDate = arrayDate.sort()[arrayDate.length - 1].getTime();
    this.orders.forEach((item: Orders) => {
      if (new Date(item.createdOn).getTime() >= maxDate) {
        this.countValue('Recently Added');
      }
      if (item.favourite) {
        this.countValue('Favourite');
      }
      this.countValue(item.status);
    });

  }

  filterItem(filter: string): void {
    switch (filter) {
      case 'Recently Added': {
        const arrayDate = this.orders.map((item: Orders) => {
          return new Date(item.createdOn);
        });
        const maxDate = arrayDate.sort()[arrayDate.length -1].getTime();
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
