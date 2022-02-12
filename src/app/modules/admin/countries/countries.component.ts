import { LoadableComponent } from '@admin/shared/interfaces/LoadableComponent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, LoadableComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
