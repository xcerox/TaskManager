import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './shared/services/project.service';
import { DashboardService } from './shared/services/dashboard.service';

@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ProjectService, DashboardService],
})
export class AdminModule { }
