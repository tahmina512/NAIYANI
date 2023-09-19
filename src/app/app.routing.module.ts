import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'signin', component: SigninComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
