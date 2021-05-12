import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FiltersComponent } from '../../core/components/filters/filters.component';
import { SearchBoxComponent } from 'src/app/core/components/search-box/search-box.component';





@NgModule({
  declarations: [DashboardComponent, FiltersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
        
  ],
  exports:[DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 
})
export class DashboardModule { }
