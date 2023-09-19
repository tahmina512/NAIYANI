import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRoutingModule } from './app.routing.module';
import { SigninComponent } from './signin/signin.component';
import { DatabaseButtonComponent } from './database-button/database-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingpageComponent,
    SigninComponent,
    DatabaseButtonComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
