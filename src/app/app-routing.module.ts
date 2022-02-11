import { AboutComponent } from '@auth/about/about.component';
import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';
import { DiscardChangesGuardService } from '@auth/shared/services/discard-changes-guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent, canDeactivate: [DiscardChangesGuardService] },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
  { path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: NoPreloading},)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
