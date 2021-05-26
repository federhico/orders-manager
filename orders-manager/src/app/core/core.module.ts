import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchBoxComponent, FiltersComponent, OrderListComponent, OrderFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchBoxComponent, FiltersComponent, OrderListComponent, OrderFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CoreModule { }
