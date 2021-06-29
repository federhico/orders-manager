import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
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
  @Output() searchEvent = new EventEmitter<any>();

  constructor(private store: Store<AppState>,
              private formGroup: FormBuilder) {

  }

  ngOnInit(): void {
    this.formInput = this.formGroup.group({
      name: ['', [ ] ]
    });
  }

  searchTitle(): void {
    this.searchEvent.emit(this.formInput.controls.name.value);
    // const title = this.formInput.controls.name.value;
    // this.store.dispatch(searchOrder({title}));
    // if (title === '') {
    //   this.store.dispatch(loadOrders());
    // }
  }

}
