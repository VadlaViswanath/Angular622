import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SubjectComponent } from '../components/subject/subject.component';


export const approutes:Routes=[
       {path:"subject",component:SubjectComponent},
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
