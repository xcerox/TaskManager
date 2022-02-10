import { AboutComponent } from '@admin/about/about.component';
import { DashboardComponent } from '@admin/dashboard/dashboard.component';
import { MyProfileComponent } from '@admin/my-profile/my-profile.component';
import { ProjectDetailsComponent } from '@admin/project-details';
import { ProjectComponent } from '@admin/project/project.component';
import { ProjectsComponent } from '@admin/projects/projects.component';
import { DashboardService } from '@admin/service/dashboard.service';
import { LocationService } from '@admin/service/location.service';
import { ProjectService } from '@admin/service/project.service';
import { CheckBoxPrinterComponent } from '@admin/shared/components/check-box-printer';
import { NumberToWordsPipe } from '@admin/shared/pipes/numberToWords';
import { TasksComponent } from '@admin/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TasksComponent, ProjectComponent, CheckBoxPrinterComponent, NumberToWordsPipe, ProjectDetailsComponent],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TasksComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    AdminRoutingModule
  ],
  providers: [ProjectService, DashboardService, LocationService],
})
export class AdminModule { }
