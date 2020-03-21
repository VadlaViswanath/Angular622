import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ang6CompComponent } from './ang6-comp/ang6-comp.component';
import { Ang6ServiceService } from './ang6-service.service';
import { Ang62Component } from './ang62/ang62.component';

@NgModule({
  declarations: [
    AppComponent,
    Ang6CompComponent,
    Ang62Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Ang6ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
