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
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtInterceptorProvider } from '@auth/shared/utils/providers';
import { AdminRoutingModule } from './admin-routing.module';
import { ClientLocationsComponent } from './client-locations';
import { CounriesComponent } from './counries';
import { MastersComponent } from './masters';
import { TaskPrioritiesComponent } from './task-priorities';
import { TaskStatusComponent } from './task-status';
import { ComponentLoaderDirective } from './shared/directives/component-loader/component-loader.directive';

@NgModule({
  declarations: [
    DashboardComponent, 
    MyProfileComponent, 
    ProjectsComponent, 
    ProjectComponent, 
    CheckBoxPrinterComponent, 
    NumberToWordsPipe, 
    ProjectDetailsComponent, 
    CounriesComponent, 
    ClientLocationsComponent, 
    TaskPrioritiesComponent, 
    TaskStatusComponent, 
    MastersComponent, 
    ComponentLoaderDirective
  ],exports: [DashboardComponent, MyProfileComponent, ProjectsComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [ProjectService, DashboardService, LocationService, JwtInterceptorProvider],
})
export class AdminModule { }
