import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FiltersComponent } from './filters/filters.component';




@NgModule({
  declarations: [DashboardComponent, FiltersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,    
  ],
  exports:[DashboardComponent],
 
})
export class DashboardModule { }
