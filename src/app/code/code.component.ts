import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  public phoneNumber: string;

  constructor() { }

  ngOnInit() {
    this.phoneNumber = '9999999';
  }

}
