import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerFormComponent } from './components/primer-form/primer-form.component';

const routes: Routes = [
  {
    path:'',
    component:PrimerFormComponent,
    pathMatch:'full'
  },
  { path: 'orders',
   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) 
  },
  { path: 'authorization', 
  loadChildren: () => import('./components/authorization/authorization.module')
  .then(m => m.AuthorizationModule) 
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
