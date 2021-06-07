import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.css']
})
export class OrderFormPageComponent implements OnInit {

  title = 'New Order';

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params;
    if (id.id !== undefined){
      this.title = 'Edit Order';
      }
  }
}
