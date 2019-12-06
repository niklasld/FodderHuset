import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AuthGuard } from './auth.guard';
import { UseradminGuard } from './useradmin.guard';
import { AddProductsComponent } from './add-products/add-products.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'view-products', component: ViewProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'add-products', component: AddProductsComponent},

  {path: "admin-portal", component: AdminPortalComponent, canActivate: [UseradminGuard], children:[
    {path: "add-products" , component: AddProductsComponent}
  ]},

  { path: '**', component: PageNotFoundComponent }
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
