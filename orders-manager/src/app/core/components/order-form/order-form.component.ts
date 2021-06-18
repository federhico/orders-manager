import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Orders } from '../../models/Orders';
import { OrdersService } from '../../services/orders.service';
import * as OrderAction from '../order-list/store/order.actions';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order: Orders = {
    _id: '',
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
    createdOn: '',
    favourite: false
  };

  regForm: FormGroup;
  submitted = false;
  status: string[] = ['On Hold', 'Urgent', 'Deleted'];
  mUnit: string[] = ['KG', 'LB'];
  id: any = undefined;

  constructor(private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private orderService: OrdersService,
              private router: Router,
              private datePipe: DatePipe,
              private authService: AuthService,
              private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params;
    if (this.id.id !== undefined) {
      this.order = this.orderService.getOne(this.id.id).subscribe((res: any) => {
        const putOrder = res.data;
        this.order = putOrder[0];
      });
    }
    this.regForm = this.formBuilder.group({
      title: [this.order.title, [Validators.required]],
      description: [this.order.description, [Validators.required]],
      price: [this.order.price, [Validators.required]],
      tax: [this.order.taxApplied, [Validators.required]],
      weight: [this.order.weight, [Validators.required]],
      mUnit: [this.order.messureUnit, [Validators.required]],
      status: [this.order.status, [Validators.required]],
      destAdress: [this.order.destinationAddress, [Validators.required]],
      destCity: [this.order.destinationCity, [Validators.required]],
      destCountry: [this.order.destinationCountry, [Validators.required]]
    });
  }

  submit(id: string): void {
    this.submitted = true;
    if (!this.regForm.invalid) {
      if (this.id.id === undefined) {
        const date = new Date();
        const stringDate = this.datePipe.transform(date, 'yyyy-MM-dd:hh:0ss:mm');
        if (stringDate) {
          this.order.createdOn = stringDate.toString();
        }
        this.authService.user$.subscribe((res: any) => {
          console.log(res);

          this.order.sender.name = res.name;
        });
        // Aplicando REDUX
        this.store.dispatch(OrderAction.addOrder({newOrder: this.order}));
        this.router.navigate(['/dashboard']);


        // this.orderService.post(this.order).subscribe((res: any) => {
        //   alert('New Order Created');
        //   this.router.navigate(['/dashboard']);
        // });
      }
      else{
        // Aplicando REDUX
        this.store.dispatch(OrderAction.editOrder( { edittedOrder: this.order } ));
        alert('Order Edited');
        this.router.navigate(['/dashboard']);

      //   this.orderService.put(this.order).subscribe((res: any) => {


        // alert('Order Edited');
        // this.router.navigate(['/dashboard']);
      // });
      }
    }
    else {
      alert('Please Fill all the From');
    }
  }

  cancelToggleHandled(): void {
    this.router.navigate(['/dashboard']);
  }


}
