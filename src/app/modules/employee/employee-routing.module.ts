import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from '@auth/shared/services/can-activate-guard';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: "", canActivate: [CanActivateGuardService], data: { role: "Employee" }, children: [
      { path: "tasks", component: TasksComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
