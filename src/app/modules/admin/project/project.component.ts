import { Project } from '@admin/shared/models/project';
import { ProjectService } from '@admin/shared/services/project.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends BaseComponent implements OnInit  {

  @Input("currentProject") current!: Project;
  @Output() onChoose = new EventEmitter();
  isDetailHide: boolean = false;

  constructor(private projectService: ProjectService) {
    super();
  }

  ngOnInit(): void {
    this.projectService.onDetailsChange$.pipe(takeUntil(this.onDestroy$)).subscribe(isHide => this.isDetailHide = isHide);
  }

  onChooseProject() {
    this.onChoose.emit(this.current.id);
  }
  
  toggleDetail() {
    this.isDetailHide = !this.isDetailHide;
  }
}
