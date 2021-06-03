import { Routes } from '@angular/router';

import { DashboardComponent } from 'app/ui/pages/dashboard/dashboard.component';
import { DegreesComponent } from 'app/ui/pages/degrees/degrees.component';
import { ActivitiesComponent } from "app/ui/pages/activities/activities.component";
import { AddActivityComponent } from 'app/ui/pages/add-activity/add-activity.component';
import { AddDegreeComponent } from 'app/ui/pages/add-degree/add-degree.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'degrees', component: DegreesComponent },
    { path: 'degrees/add', component: AddDegreeComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'activities/add', component: AddActivityComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
