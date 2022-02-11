import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from '@auth/shared/services/can-activate-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MastersComponent } from './masters';
import { ProjectDetailsComponent } from './project-details';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: "", canActivate: [CanActivateGuardService], data: { role: "Admin" }, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "projects/view/:projectId", component: ProjectDetailsComponent },
      { path: "masters", component: MastersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
