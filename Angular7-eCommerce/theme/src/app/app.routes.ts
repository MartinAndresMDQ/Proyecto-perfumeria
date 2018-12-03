import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home/one', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './fashion/fashion.module#FashionModule'
  },
  { 
    path: 'pages',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  { 
    path: 'blog',
    component: BlogComponent,
    loadChildren: './blog/blog.module#BlogModule'
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

