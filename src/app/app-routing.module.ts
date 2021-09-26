import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@admin/dashboard/dashboard.component';
import { AboutComponent } from '@admin/about/about.component';
import { ProjectsComponent } from '@admin/projects/projects.component';
import { LoginComponent } from '@auth/login/login.component';
import { CanActivateGuardService } from '@auth/service/can-activate-guard.service';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';
import { TasksComponent } from '@admin/tasks/tasks.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [CanActivateGuardService], data: { role: "Admin" } },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent, canActivate: [CanActivateGuardService], data: { role: "Admin" } },
  { path: "signup", component: SignUpComponent },
  { path: "tasks", component: TasksComponent, canActivate: [CanActivateGuardService], data: { role: "Employee" } },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
