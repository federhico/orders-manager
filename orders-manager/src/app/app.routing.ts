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
{ path: 'profile',
loadChildren: () => import('./pages/profile/profile.module').
then(m => m.ProfileModule), canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'home',
loadChildren: () => import('./pages/home/home.module').
then(m => m.HomeModule) },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
