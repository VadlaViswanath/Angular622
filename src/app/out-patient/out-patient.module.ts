import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantComponent } from '../outPatient/consultant/consultant.component';
import { Routes, RouterModule } from '@angular/router';

 export const appRotes:Routes=[
      {path:'',component:ConsultantComponent}
    ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRotes)
  ],
  declarations: [ConsultantComponent],
  exports:[ConsultantComponent]
})
export class OutPatientModule { }
