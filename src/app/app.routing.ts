import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'sessions/signin', 
    pathMatch: 'full' 
  }, 
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule), 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      },
      { 
        path: 'company', 
        loadChildren: () => import('./views/company-management/company-management.module').then(m => m.CompanyManagementModule), 
        data: { title: 'Company', breadcrumb: 'Company'}
      } ,
      { 
        path: 'material', 
        loadChildren: () => import('./views/material-management/material-management.module').then(m => m.MaterialManagementModule), 
        data: { title: 'Material', breadcrumb: 'Material'}
      }  ,
      { 
        path: 'warehouse', 
        loadChildren: () => import('./views/warehouse-management/warehouse-management.module').then(m => m.WarehouseManagementModule), 
        data: { title: 'Warehouse', breadcrumb: 'warehouse'}
      } ,
      { 
        path: 'workorder', 
        loadChildren: () => import('./views/workorder-management/workorder-management.module').then(m => m.WorkorderManagementModule), 
        data: { title: 'workorder', breadcrumb: 'workorder'}
      } ,
      { 
        path: 'chalan', 
        loadChildren: () => import('./views/chalan/chalan.module').then(m => m.ChalanModule), 
        data: { title: 'chalan', breadcrumb: 'chalan'}
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

