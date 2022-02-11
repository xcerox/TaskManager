import { Message } from '@admin/shared/interfaces/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit, Message {

  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setMessage(value: string): void {
      this.message = value;
  }
}
