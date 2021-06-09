import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './ui/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './ui/layouts/login-layout/login-layout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';


export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./ui/layouts/login-layout/login-layout.module').then(m => m.LoginLayoutModule)
      }]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: () => import('./ui/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
