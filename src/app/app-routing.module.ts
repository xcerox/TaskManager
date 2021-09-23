import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@admin/dashboard/dashboard.component';
import { AboutComponent } from '@admin/about/about.component';
import { ProjectsComponent } from '@admin/projects/projects.component';
import { LoginComponent } from '@auth/login/login.component';
import { CanActivateGuardService } from '@auth/service/can-activate-guard.service';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [CanActivateGuardService], data: {role: "Admin"}},
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent, canActivate: [CanActivateGuardService], data: {role: "Admin"}},
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
