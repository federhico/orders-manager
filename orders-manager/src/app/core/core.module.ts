import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    SearchBoxComponent, FiltersComponent, OrderListComponent, LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SearchBoxComponent, FiltersComponent, OrderListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CoreModule { }
