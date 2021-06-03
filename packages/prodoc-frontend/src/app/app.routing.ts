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
        loadChildren: './ui/layouts/login-layout/login-layout.module#LoginLayoutModule'
      }]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: './ui/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
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
