import { LoadableComponent } from '@admin/shared/interfaces/LoadableComponent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-locations',
  templateUrl: './client-locations.component.html',
  styleUrls: ['./client-locations.component.scss']
})
export class ClientLocationsComponent implements OnInit, LoadableComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
