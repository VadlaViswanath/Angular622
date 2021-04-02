import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SubjectComponent } from '../components/subject/subject.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { Login2Component } from '../components/login2/login2.component';
import { ItemsListComponent } from '../components/items-list/items-list.component';
import { ItemsDetailsComponent } from '../components/items-details/items-details.component';
import { AppComponent } from '../app.component';


export const approutes:Routes=[
      //  {path:"",component:Login2Component},
      //  {path:"",component:AppComponent},
      //  {path:"subject",component:SubjectComponent},
       {path:"dashboard",component:DashboardComponent},
      {path:"ip",loadChildren:'../in-patient/in-patient.module#InPatientModule'},
      {path:"op",loadChildren:'../out-patient/out-patient.module#OutPatientModule'},
      {path:"items-list",component:ItemsListComponent},
      {path:"items-details/:orderId",component:ItemsDetailsComponent},
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
