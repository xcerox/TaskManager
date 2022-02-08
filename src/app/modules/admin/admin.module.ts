import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@admin/dashboard/dashboard.component';
import { MyProfileComponent } from '@admin/my-profile/my-profile.component';
import { AboutComponent } from '@admin/about/about.component';
import { ProjectsComponent } from '@admin/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from '@admin/service/project.service';
import { DashboardService } from '@admin/service/dashboard.service';
import { FormsModule } from '@angular/forms';
import { LocationService } from '@admin/service/location.service';
import { TasksComponent } from '@admin/tasks/tasks.component';
import { ProjectComponent } from '@admin/project/project.component';
import { CheckBoxPrinterComponent } from '@admin/shared/components/check-box-printer';
import { NumberToWordsPipe } from './shared/pipes/numberToWords';

@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TasksComponent, ProjectComponent, CheckBoxPrinterComponent, NumberToWordsPipe],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TasksComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectService, DashboardService, LocationService],
})
export class AdminModule { }
