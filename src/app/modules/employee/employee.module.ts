import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorProvider } from '@auth/shared/utils/providers';


@NgModule({
  declarations: [ TasksComponent],
  exports: [ TasksComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
  ], 
  providers: [ JwtInterceptorProvider ]
})
export class EmployeeModule { }
