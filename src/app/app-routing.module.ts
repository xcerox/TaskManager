import { AboutComponent } from '@admin/about/about.component';
import { TasksComponent } from '@admin/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';
import { CanActivateGuardService } from '@auth/service/can-activate-guard.service';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "about", component: AboutComponent },
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
