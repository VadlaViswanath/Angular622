import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


export const approutes:Routes=[
      {path:"ip",loadChildren:'../in-patient/in-patient.module#InPatientModule'},
      {path:"op",loadChildren:'../out-patient/out-patient.module#OutPatientModule'}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
