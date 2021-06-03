import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderFormComponent } from './components/order-form/order-form.component';




@NgModule({
  declarations: [
    SearchBoxComponent, FiltersComponent, OrderListComponent, LoginComponent, OrderFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [SearchBoxComponent, FiltersComponent, OrderListComponent, OrderFormComponent],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CoreModule { }
