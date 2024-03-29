import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcFormsComponent } from './dc-forms/dc-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DcFormsListComponent } from './dc-forms/dc-forms-list/dc-forms-list.component';
import { DcFormsCardComponent } from './dc-forms/dc-forms-card/dc-forms-card.component';
import { FormsService } from './services/forms.service';
import { AddFormComponent } from './dc-forms/add-form/add-form.component';
import { FormDetailsComponent } from './dc-forms/form-details/form-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

const appRoutes : Routes = [
  {path:'',component:DcFormsListComponent},
  {path:'add-form',component:AddFormComponent},
  {path:'form-detail/:id',component:FormDetailsComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:'**',component:DcFormsListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DcFormsComponent,
    NavBarComponent,
    DcFormsListComponent,
    DcFormsCardComponent,
    AddFormComponent,
    FormDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    FormsService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
