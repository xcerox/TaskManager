import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@admin/dashboard/dashboard.component';
import { AboutComponent } from '@admin/about/about.component';
import { ProjectsComponent } from '@admin/projects/projects.component';
import { LoginComponent } from '@auth/login/login.component';
import { CanActivateGuardService } from '@auth/service/can-activate-guard.service';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';
import { TasksComponent } from '@admin/tasks/tasks.component';
import { ProjectDetailsComponent } from '@admin/project-details';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", canActivate: [CanActivateGuardService], data: { role: "Admin" }, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "projects/view/:projectId", component: ProjectDetailsComponent },
    ]
  },
  { path: "employee", canActivate: [CanActivateGuardService], data: { role: "Employee" }, children: [
      { path: "tasks", component: TasksComponent }
    ]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
