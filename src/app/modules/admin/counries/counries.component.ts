import { Message } from '@admin/shared/interfaces/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counries',
  templateUrl: './counries.component.html',
  styleUrls: ['./counries.component.scss']
})
export class CounriesComponent implements OnInit, Message {

  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setMessage(value: string): void {
      this.message = value;
  }
}
