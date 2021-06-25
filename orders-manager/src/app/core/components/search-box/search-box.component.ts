import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { searchOrder, loadOrders } from '../order-list/store/order.actions';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  formInput: FormGroup;

  constructor(private store: Store<AppState>,
              private formGroup: FormBuilder) {

  }

  ngOnInit(): void {
    this.formInput = this.formGroup.group({
      name: ['', [ ] ]
    });
  }

  searchTitle(): void {
    const title = this.formInput.controls.name.value;
    this.store.dispatch(searchOrder({title}));
    if (title === '') {
      this.store.dispatch(loadOrders());
    }
  }

}
