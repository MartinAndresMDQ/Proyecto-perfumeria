import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'Inicio',
    component: ECommerceComponent,
  }, {
  //   path: 'iot-dashboard',
  //   component: DashboardComponent,
  // }, {
    path: 'Productos',
    loadChildren: './producto/producto.module#ProductoModule',
  }, {
    path: 'Pedidos',
    // loadChildren: './pedido/pedido.module#PedidoModule',
    loadChildren: './producto/producto.module#ProductoModule',
  }, {
    path: 'Clientes',
    // loadChildren: './cliente/cliente.module#ClienteModule',
    loadChildren: './producto/producto.module#ProductoModule',
  }, {
    path: 'Varios',
    // loadChildren: './varios/varios.module#VariosModule',
    loadChildren: './producto/producto.module#ProductoModule',
  }, 
  // {
  //   path: 'maps',
  //   loadChildren: './maps/maps.module#MapsModule',
  // }, {
  //   path: 'charts',
  //   loadChildren: './charts/charts.module#ChartsModule',
  // }, {
  //   path: 'editors',
  //   loadChildren: './editors/editors.module#EditorsModule',
  // }, {
  //   path: 'forms',
  //   loadChildren: './forms/forms.module#FormsModule',
  // }, {
  //   path: 'tables',
  //   loadChildren: './tables/tables.module#TablesModule',
  // }, {
  //   path: 'miscellaneous',
  //   loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  // }, 
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
