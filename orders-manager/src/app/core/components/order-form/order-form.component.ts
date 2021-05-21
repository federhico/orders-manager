import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form-s',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {


  regForm: FormGroup;
  submitted = false;
  status: string[];
  mUnit: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
