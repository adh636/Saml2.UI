import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SamlLoginComponent } from './saml-login/saml-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SamlLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
