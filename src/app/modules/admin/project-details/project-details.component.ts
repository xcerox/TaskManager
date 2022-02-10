import { Project } from '@admin/shared/models/project';
import { ProjectService } from '@admin/shared/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent extends BaseComponent implements OnInit {

  current: Project = <Project>{};

  constructor(private activatedService: ActivatedRoute, private projectService: ProjectService) { 
    super();
  }

  ngOnInit(): void {
    this.activatedService.params.pipe(takeUntil(this.onDestroy$)).subscribe(params => {
      const [id] = params["projectId"];

      this.projectService.findById(id).pipe(takeUntil(this.onDestroy$)).subscribe(project => this.current = project);;
    })
  }

}
