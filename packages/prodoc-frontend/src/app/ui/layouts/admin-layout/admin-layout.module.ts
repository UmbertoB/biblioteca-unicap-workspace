import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from 'app/ui/pages/dashboard/dashboard.component';
import { LibraryBooksComponent } from 'app/ui/pages/library-books/library-books.component';
import { AddBookComponent } from 'app/ui/pages/add-book/add-book.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserBooksComponent } from 'app/ui/pages/user-books/user-books.component';

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
    LibraryBooksComponent,
    AddBookComponent,
    UserBooksComponent,
  ]
})

export class AdminLayoutModule {}
