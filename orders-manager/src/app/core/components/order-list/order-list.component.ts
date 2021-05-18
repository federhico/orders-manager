import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Orders } from '../../models/Orders';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() orders: Orders[];


  constructor() {  }

  ngOnInit(): void {
  }


}
