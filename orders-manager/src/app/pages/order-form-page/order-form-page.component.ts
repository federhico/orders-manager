import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.css']
})
export class OrderFormPageComponent implements OnInit {

  title: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params;
    console.log(id);

    if (id !== {}){
      this.title = 'Edit Order';
    }
  }
}
