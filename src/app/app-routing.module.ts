import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }         from './_auth/auth.guard';
import { LoginPageComponent } from "./dashboard/loginPage/loginPage.component";
import { PageNotFoundComponent } from "./pagenotfound.component";
const routes: Routes = [
  //*/,
  {
    path: 'login',
    loadChildren: './dashboard/loginPage/loginPage.module#loginPageModule',
    //component: LoginPageComponent
  },//*/,
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
