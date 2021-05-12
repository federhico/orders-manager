import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
{ path: 'dashboard', 
loadChildren: () => import('./pages/dashboard/dashboard.module').
then(m => m.DashboardModule) },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);