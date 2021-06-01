import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormRoutingModule } from './order-form-page.routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderFormRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class OrderFormPageModule { }
