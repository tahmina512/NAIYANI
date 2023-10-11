import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { DatabaseButtonComponent } from './database-button/database-button.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { DataInfoComponent } from './data-info/data-info.component';
import { LOGINPAGEComponent } from './login-page/login-page.component';
import { ButtonInputComponent } from './button-input/button-input.component';

const appRoutes: Routes = [
  { path: '', component: ButtonInputComponent },
  { path: 'database-btn', component: DatabaseButtonComponent },
  { path: 'list', component: DatabaseListComponent },
  { path: 'info', component: DataInfoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
