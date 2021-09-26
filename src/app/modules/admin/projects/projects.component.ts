import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '@admin/model/project';
import { ProjectService } from '@admin/service/project.service';
import { ProjectUtil } from '@admin/shared/utils/project-util';
import { SearchOptions } from '@admin/model/search-options';
import { LocationService } from '@admin/service/location.service';
import { Location } from '@admin/model/location';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project> = [];
  project: Project = <Project>{};
  modalState!: "New" | "Edit";
  searchOptions: SearchOptions = <SearchOptions>{field: "All"};
  locations: Array<Location> = [];
  isLoading!: boolean;

  @ViewChild("newForm") newForm: NgForm | any = null;

  constructor(private projectService: ProjectService, private locationService: LocationService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getLocations();
  }

  private getProjects(): void {
    this.isLoading = true;
    this.projectService.getAll().subscribe((projects: Array<Project>) => {
      this.projects = projects;
      this.isLoading = false;
    });
  }

  private getLocations(): void {
    this.isLoading = true;
    this.locationService.getAll().subscribe((locations) => {
      this.locations = locations;
      this.isLoading = false;
    });
  }

  onFilter(){
    if(this.searchOptions.field == "All") {
      this.getProjects();
    } else {
      this.projectService.findBy(this.searchOptions).subscribe((projects: Array<Project>) => this.projects = projects, console.error);
    }
  }

  onOpenCreateModal(): void {
    this.modalState = "New";
    this.project = <Project>{};
    this.newForm.resetForm();
  }

  onSaveForm(){
    if (this.newForm.valid && ProjectUtil.isValidProject(this.project)) {
      this.project.location = this.findLocation(this.project.locationId);
      if (this.modalState == "New") {
        this.projectService.create(this.project).subscribe(() => {
          this.project = <Project>{};
          this.getProjects();
        });
      } else if (this.modalState == "Edit") {
        if (ProjectUtil.isProjectUpdated(this.project, this.projects)) {
          this.projectService.update(this.project).subscribe(() => {
            this.project = <Project>{};
            this.getProjects();
          });
        }
      }
    }
  }

  private findLocation(locationId:number): Location {
    return <Location>this.locations.find(location => location.id == locationId);
  }

  private findProject(projectId:number): Project {
    return <Project>this.projects.find(project => project.id == projectId);
  }

  onChooseProject(projectId:number): void {
    this.newForm.resetForm();
    this.modalState = "Edit";
    this.project = {...this.findProject(projectId)};
  }

  onDeleteConfirmed(){
    this.projectService.delete(this.project).subscribe(() => this.getProjects());
  }
}
