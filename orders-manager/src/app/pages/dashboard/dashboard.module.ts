import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FiltersComponent } from 'src/app/core/components/filters/filters.component';
import { SearchBoxComponent } from 'src/app/core/components/search-box/search-box.component';
import { OrderListComponent } from 'src/app/core/components/order-list/order-list.component';






@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FiltersComponent,
    SearchBoxComponent,
    OrderListComponent 
      
  ],
  exports:[DashboardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

 
})
export class DashboardModule { }
