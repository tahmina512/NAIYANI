import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { DatabaseButtonComponent } from './database-button/database-button.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { DataInfoComponent } from './data-info/data-info.component';
import { LogoComponent } from './logo/logo.component';
import { TestingComponent } from './testing/testing.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'database-btn', component: DatabaseButtonComponent },
  { path: 'list', component: DatabaseListComponent },
  { path: 'info', component: DataInfoComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'test', component: TestingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
