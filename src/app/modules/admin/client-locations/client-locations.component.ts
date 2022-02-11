import { Message } from '@admin/shared/interfaces/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-locations',
  templateUrl: './client-locations.component.html',
  styleUrls: ['./client-locations.component.scss']
})
export class ClientLocationsComponent implements OnInit, Message {

  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setMessage(value: string): void {
      this.message = value;
  }

}
