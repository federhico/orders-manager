import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from './core/components/login/login.component';




const appRoutes: Routes = [
{ path: 'dashboard',
loadChildren: () => import('./pages/dashboard/dashboard.module').
then(m => m.DashboardModule), canActivate: [AuthGuard ] },
{ path: 'orderForm',
loadChildren: () => import('./pages/order-form-page/order-form-page.module').
then(m => m.OrderFormPageModule) },
{ path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
