import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auth0Service } from '../shared/services/auth0.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  @Output() openPhoneScreen = new EventEmitter();

  constructor(public auth0Service: Auth0Service) { }

  ngOnInit() {
  }

  logInClick() {
    this.auth0Service.login();
    // this.openPhoneScreen.emit();
  }
}
