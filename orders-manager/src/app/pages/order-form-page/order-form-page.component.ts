import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.css']
})
export class OrderFormPageComponent implements OnInit {

  @Input() title = 'New Order';

  constructor() { }

  ngOnInit(): void {
  }

}
