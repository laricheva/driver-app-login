import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { CodeComponent } from './code/code.component';
import { Auth0Service } from './shared/services/auth0.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PopupComponent,
    LoginComponent,
    PhoneComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Auth0Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
