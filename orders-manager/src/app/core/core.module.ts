import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderListComponent } from './components/order-list/order-list.component';



@NgModule({
  declarations: [
    SearchBoxComponent, FiltersComponent, OrderListComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchBoxComponent, FiltersComponent, OrderListComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
