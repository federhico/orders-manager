import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Orders } from '../../models/Orders';

@Component({
  selector: 'app-order-form-s',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order: Orders =  {
    id: '',
    title: '',
    description: '',
    status: '',
    sender: {
        id: 0,
        name: ''
    },
    destinationAddress: '',
    destinationCity: '',
    destinationCountry: '',
    destinationCoordinates: {
        lat: 0,
        long: 0
    },
    price: 0,
    taxApplied: 0,
    weight: 0,
    messureUnit: '',
    createdOn: ''
};

  regForm: FormGroup;
  submitted = false;
  status: string[] = ['Hold On', 'Urgent'];
  mUnit: string[] = ['KG', 'LB'];

  constructor(private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute // , private orderService: OrdersService
    ) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        price: ['', [Validators.required]],
        tax: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        mUnit: ['', [Validators.required]],
        status: ['', [Validators.required]],
        destAdress: ['', [Validators.required]],
        destCity: ['', [Validators.required]],
        destCountry: ['', [Validators.required]]
      });
    const id = this.activeRoute.snapshot.params;
    if (id !== {}){
      // orders = this.orderService.getOne(id)
      }
  }

  submit(): void {
    if (!this.regForm.invalid){
      console.log('Valid');
      // this.orderService.post(order);
      return;
    }
    console.log('Invalid');
  }

}
