import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {LayoutComponent} from './dashboard/layout/layout.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LayoutComponent,children:[
      {path:'products',loadChildren:()=>import('./products/products.module').then(m => m.ProductsModule)},
      {path:'customers',loadChildren:()=>import('./customers/customers.module').then(m => m.CustomersModule)},
      {path:'bills', loadChildren:()=>import('./bills/bills.module').then(m => m.BillsModule)},
      {path:'reports',loadChildren:()=>import('./reports/reports.module').then(m => m.ReportsModule)},
    ]},

];
