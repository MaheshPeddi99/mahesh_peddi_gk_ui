import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { showBack: false, title: 'Login', showLoginInfo: false }
  },
  {
    path: 'content',
    component: ContentComponent,
    data: { showBack: true, title: '', showLoginInfo: true }
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: { showBack: true, title: 'Add Customer Details', showLoginInfo: true },
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { showBack: true, title: 'View Customer Details', showLoginInfo: true }
  },
  {
    path: 'hierarchy',
    component: HierarchyComponent,
    data: { showBack: true, title: 'Hierarchy', showLoginInfo: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
