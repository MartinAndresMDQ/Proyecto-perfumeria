import { UserComponent } from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component';
import {ProductCategoryComponent} from './components/product-category/product-category.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharmCategoryComponent} from './components/charm-category/charm-category.component';
import {CharmComponent} from './components/charm/charm.component';
import {AuthGuard} from './services/authGuard';
import {ProductComponent} from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'charm', component: CharmComponent},
  {path: 'product-category', component: ProductCategoryComponent},
  {path: 'charm-category', component: CharmCategoryComponent},
  {path: 'product', component: ProductComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent},
  // {path: 'repository', component: RepositoryComponent},
  // {path: 'repository/:repositoryId/version', component: VersionComponent},
  // {path: 'repository/:repositoryId/version/:versionId/file', component: FileComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'login'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
