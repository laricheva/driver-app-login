import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {

  readonly LOGIN_SCREEN = 'login';
  readonly PHONE_SCREEN = 'phone';
  readonly CODE_SCREEN = 'code';

  public screen = this.LOGIN_SCREEN;

  constructor() { }

  ngOnInit() {
  }

  openScreen(screenType: string) {
    this.screen = screenType;
  }

}
