import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
//import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FooterComponent } from "./componentes/footer/footer.component";
import { NavigationComponent } from "./componentes/navigation/navigation.component";
import { UserPageComponent } from "./userPage/userPage.component"
import { UserEditComponent } from "./userPage/edit-user/userEdit.component"
import { RolesPageComponent } from "./rolesPage/rolesPage.component";
import { HomePageComponent } from "./homePage/homePage.component"
import { UserFormService } from './userPage/UserForm.service'
import { UserService } from '../_services/user.service'
import { AuthGuard }         from '../_auth/auth.guard';
import {LoginFormComponent} from '../_auth/login/login-form.component';
import {DynamicFormModule} from '../dynamic-form.module';
/*
import { AuthService } from '../auth/auth.service';
import { AuthGuard }                          from '../auth/auth.guard';
//*/
@NgModule({
  imports: [
    //...APP_MODULE_IMPORTS,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    //MaterialModule,
    //MatSidenavModule,
    DynamicFormModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WavesModule, 
    ButtonsModule, 
    MatSelectModule,
    MatFormFieldModule,
    InputsModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    NavigationComponent,    
    FooterComponent,
    UserPageComponent,
    UserEditComponent,
    RolesPageComponent,
    HomePageComponent
  ],
  providers: [UserFormService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class DashboardModule {}
