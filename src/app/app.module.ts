import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { Ang6CompComponent } from './ang6-comp/ang6-comp.component';
import { Ang6ServiceService } from './ang6-service.service';
import { Ang62Component } from './ang62/ang62.component';
import { DependentSelectComponent } from './dependent-select/dependent-select.component';
import { CountryService } from './country.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Ang6CompComponent,
    Ang62Component,
    DependentSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [Ang6ServiceService,CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
