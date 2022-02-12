import { LoadableComponent } from '@admin/shared/interfaces/LoadableComponent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit, LoadableComponent {

  constructor() { }

  ngOnInit(): void { }
}
