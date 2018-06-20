import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.styl']
})
export class PhoneComponent implements OnInit {

  @Output() openCodeScreen = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getCodeClick() {
    this.openCodeScreen.emit();
  }

}
