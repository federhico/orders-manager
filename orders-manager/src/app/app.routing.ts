import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';



const appRoutes: Routes = [
{ path: 'dashboard',
loadChildren: () => import('./pages/dashboard/dashboard.module').
then(m => m.DashboardModule) },
{ path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
