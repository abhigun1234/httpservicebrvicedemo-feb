import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DepartmenlistComponent } from './departmenlist/departmenlist.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
import { GreetingComponent } from './greeting/greeting.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    DepartmenlistComponent,
    DepartmentdetailsComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
