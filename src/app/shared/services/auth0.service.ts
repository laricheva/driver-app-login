// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class Auth0Service {

  webAuthPasswordless = new auth0.WebAuth({
    clientID: 'iNK-dgNDIvgPFHAtWUQSP4NsGRK8FX08',
    domain: 'viatestingdriver.eu.auth0.com',
    responseType: 'token',
    redirectUri: 'http://localhost:8887'
  });

  constructor() {}

  public login(): void {
    this.webAuthPasswordless.passwordlessStart({
      connection: 'sms',
      phoneNumber: '+375291479192',
      send: 'code'
    }, () => console.log('hello'));
  }

}
