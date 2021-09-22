import { Component, OnInit } from '@angular/core';
import { Project } from '@admin/model/project';
import { ProjectService } from '@admin/service/project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects!: Array<Project>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((response: Array<Project>) => {
      this.projects = response;
    });
  }

}
