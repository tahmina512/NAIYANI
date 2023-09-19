import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { DatabaseButtonComponent } from './database-button/database-button.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'database-btn', component: DatabaseButtonComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
