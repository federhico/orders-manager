import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from 'src/app/core/core.module';







@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule


  ],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class DashboardModule { }
