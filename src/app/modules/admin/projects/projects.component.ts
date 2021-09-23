import { Component, OnInit } from '@angular/core';
import { Project } from '@admin/model/project';
import { ProjectService } from '@admin/service/project.service';
import { ProjectUtils } from '@admin/util/project-utils';
import { SearchOptions } from '@admin/model/search-options';


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

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(): void {
    this.projectService.getAll().subscribe((response: Array<Project>) => {
      this.projects = response;
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
  }

  onSaveForm(){
    if (ProjectUtils.isValidProject(this.project)) {
      if (this.modalState == "New") {
        this.projectService.create(this.project).subscribe(() => {
          this.project = <Project>{};
          this.getProjects();
        }, console.error);
      } else if (this.modalState == "Edit") {
        if (ProjectUtils.isProjectUpdated(this.project, this.projects)) {
          this.projectService.update(this.project).subscribe(() => {
            this.project = <Project>{};
            this.getProjects();
          }, console.error)
        }
      }
    }
  }

  private findProject(projectId:number): Project {
    return <Project>this.projects.find((project: Project) => project.id == projectId);
  }

  onChooseProject(projectId:number): void {
    this.modalState = "Edit";
    this.project = {...this.findProject(projectId)};
  }

  onDeleteConfirmed(){
    this.projectService.delete(this.project).subscribe(() => this.getProjects(), console.error);
  }
}
