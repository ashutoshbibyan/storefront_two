import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {LayoutComponent} from './dashboard/layout/layout.component';
import {NotFoundComponent} from './dashboard/not-found/not-found.component';
import {HomeComponent} from './dashboard/home/home.component';
import {authGuard} from './auth/auth.guard';

export const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'home',component:HomeComponent , canActivate:[authGuard]},
  {path:'',component:LayoutComponent,children:[
      {path:'products',loadChildren:()=>import('./products/products.module').then(m => m.ProductsModule)},
      {path:'customers',loadChildren:()=>import('./customers/customers.module').then(m => m.CustomersModule)},
      {path:'bills', loadChildren:()=>import('./bills/bills.module').then(m => m.BillsModule)},
      {path:'reports',loadChildren:()=>import('./reports/reports.module').then(m => m.ReportsModule)},
    ]},
  {path:'**',component:NotFoundComponent},

];
