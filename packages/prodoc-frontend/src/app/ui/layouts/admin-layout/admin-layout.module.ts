import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from 'app/ui/pages/dashboard/dashboard.component';
import { ActivitiesComponent } from "app/ui/pages/activities/activities.component";
import { AddActivityComponent } from 'app/ui/pages/add-activity/add-activity.component';
import { DegreesComponent } from 'app/ui/pages/degrees/degrees.component';
import { AddDegreeComponent } from 'app/ui/pages/add-degree/add-degree.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    ActivitiesComponent,
    AddActivityComponent,
    DegreesComponent,
    AddDegreeComponent,
  ]
})

export class AdminLayoutModule {}
