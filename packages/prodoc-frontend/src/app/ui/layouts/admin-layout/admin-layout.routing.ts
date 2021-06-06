import { Routes } from '@angular/router';

import { DashboardComponent } from 'app/ui/pages/dashboard/dashboard.component';
import { LibraryBooksComponent } from 'app/ui/pages/library-books/library-books.component';
import { AddBookComponent } from 'app/ui/pages/add-book/add-book.component';
import { UserBooksComponent } from 'app/ui/pages/user-books/user-books.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'library-books', component: LibraryBooksComponent },
    { path: 'my-books', component: UserBooksComponent },
    { path: 'library-books/add', component: AddBookComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
