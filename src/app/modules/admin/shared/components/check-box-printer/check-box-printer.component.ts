import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'check-box-printer',
  templateUrl: './check-box-printer.component.html',
  styleUrls: ['./check-box-printer.component.scss']
})
export class CheckBoxPrinterComponent implements OnInit {

  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue($event: Event): void {
    this.isChecked = (<HTMLInputElement>$event.currentTarget).checked;
  }

}
