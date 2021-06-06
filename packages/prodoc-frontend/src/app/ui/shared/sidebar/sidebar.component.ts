import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Painel',  icon:'nc-chart-pie-36',   class: '' },
    { path: '/my-books',      title: 'Meus Livros', icon:'nc-book-bookmark',      class: '' },
    { path: '/library-books', title: 'Biblioteca',  icon:'nc-single-copy-04', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        if (this.authService.isAdmin()) {
            this.menuItems = ROUTES.filter(menuItem => menuItem.path !== '/my-books');
        } else {
            this.menuItems = ROUTES;
        }
    }
}
