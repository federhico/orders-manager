import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormdRoutingModule } from './order-form.routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderFormdRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class OrderFormModule { }
