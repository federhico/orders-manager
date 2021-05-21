
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './order-form.component';


const routes: Routes = [
  {
    path: '',
    component: OrderFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderFormdRoutingModule { }
