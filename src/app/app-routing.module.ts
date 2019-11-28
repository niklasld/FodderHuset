import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
{ path: '**', component: PageNotFoundComponent }
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  

export class AppRoutingModule { }