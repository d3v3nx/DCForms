import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcFormsComponent } from './dc-forms/dc-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DcFormsListComponent } from './dc-forms/dc-forms-list/dc-forms-list.component';
import { DcFormsCardComponent } from './dc-forms/dc-forms-card/dc-forms-card.component';
import { FormsService } from './services/forms.service';
import { AddFormComponent } from './dc-forms/add-form/add-form.component';
import { FormDetailsComponent } from './dc-forms/form-details/form-details.component';

const appRoutes : Routes = [
  {path:'',component:DcFormsListComponent},
  {path:'add-form',component:AddFormComponent},
  {path:'form-detail',component:FormDetailsComponent},
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
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration(),
    FormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
