import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpServiceComponent } from '../inPatient/ip-service/ip-service.component';
import { Routes, RouterModule } from '@angular/router';

 export const appRotes:Routes=[
      {path:'',component:IpServiceComponent}
    ]
    
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRotes)
  ],
  declarations: [IpServiceComponent],
  exports:[IpServiceComponent]
})
export class InPatientModule { }
