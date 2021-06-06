import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'app/services/api/user.service';
import Chart from 'chart.js';
import { Toast } from 'app/lib/toast';
import { AuthService } from 'app/services/auth/auth.service';
import { BookService } from 'app/services/api/book.service';
import { Observable } from 'rxjs';

const DEGREE_CRITERIA = {
  3: 'Ter Diploma de Mestrado',
  4: 'Ter Diploma de Doutorado',
}

const DEGREES = {
  1: 'Graduado',
  2: 'Pós-Graduado',
  3: 'Mestre',
  4: 'Doutor',
  5: 'Pós-Doutor'
}

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public totalUserBooks: Observable<{ data: number }>;
  public totalAvaiableBooks: Observable<{ data: number }>;

  constructor(public authService: AuthService, 
    private bookService: BookService,
    private toast: Toast) { }

  ngOnInit() {
    
    this.totalUserBooks = this.bookService.getUserBooksCount(this.authService.currentUser.id);
    this.totalAvaiableBooks = this.bookService.getAvaiableBooksCount();

  }

}
