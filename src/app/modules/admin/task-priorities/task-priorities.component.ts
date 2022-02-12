import { LoadableComponent } from '@admin/shared/interfaces/LoadableComponent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-priorities',
  templateUrl: './task-priorities.component.html',
  styleUrls: ['./task-priorities.component.scss']
})
export class TaskPrioritiesComponent implements OnInit, LoadableComponent {

  constructor() { }

  ngOnInit(): void {
  }
}
