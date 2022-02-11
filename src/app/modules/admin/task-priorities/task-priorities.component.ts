import { Message } from '@admin/shared/interfaces/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-priorities',
  templateUrl: './task-priorities.component.html',
  styleUrls: ['./task-priorities.component.scss']
})
export class TaskPrioritiesComponent implements OnInit, Message {

  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setMessage(value: string): void {
      this.message = value;
  }
}
