import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormPageComponent } from './order-form-page.component';


const routes: Routes = [
  {
    path: '',
    component: OrderFormPageComponent
  },
  {
    path: ':id',
    component: OrderFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderFormRoutingModule { }
