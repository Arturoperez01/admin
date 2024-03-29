// layput-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { HomePageComponent } from "./homePage/homePage.component";  
import { UserPageComponent } from "./userPage/userPage.component";
import { UserEditComponent } from "./userPage/edit-user/userEdit.component"
import { RolesPageComponent } from "./rolesPage/rolesPage.component";
import { AuthGuard }         from '../_auth/auth.guard';
import { LoginPageComponent } from "./loginPage/loginPage.component";
import { PageNotFoundComponent } from "../pagenotfound.component";

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '', component: DashboardComponent , canActivate: [AuthGuard], data:['ADMIN'],
  children:
  [
      { path: 'home', component: HomePageComponent },
      //{ path: 'perfil', loadChildren: '../home/perfil/perfil.module#PerfilModule' },
      { path: 'user', component: UserPageComponent },
      { path: 'roles', component: RolesPageComponent },
      { path: 'user/:id', component: UserEditComponent },
      { path: '**', component: PageNotFoundComponent }
    
    /*
    { path: '', component: HomePageComponent , //canActivateChild: [AuthGuard] , 
      children:
        [
          { path: 'home', component: HomePageComponent },
          { path: 'user', component: UserPageComponent },
          { path: 'user/:id', component: UserEditComponent }  
        ]
    }//*/
  ]//*/
  }
  /*,
  {
    path: 'login',
    component: LoginPageComponent
  }
  //*/
//{ path: 'modals', component: ModalsComponent},
//{ path: '**', component: NotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }