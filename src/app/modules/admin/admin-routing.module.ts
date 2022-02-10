import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from '@auth/shared/services/can-activate-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailsComponent } from './project-details';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: "admin", canActivate: [CanActivateGuardService], data: { role: "Admin" }, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "projects/view/:projectId", component: ProjectDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
