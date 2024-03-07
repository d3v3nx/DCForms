import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcFormsComponent } from './dc-forms/dc-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DcFormsListComponent } from './dc-forms/dc-forms-list/dc-forms-list.component';
import { DcFormsCardComponent } from './dc-forms/dc-forms-card/dc-forms-card.component';
import { FormsService } from './services/forms.service';

@NgModule({
  declarations: [
    AppComponent,
    DcFormsComponent,
    NavBarComponent,
    DcFormsListComponent,
    DcFormsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    FormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
