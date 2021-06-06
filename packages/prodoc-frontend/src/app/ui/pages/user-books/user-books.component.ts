import { Component, OnInit } from '@angular/core';
import { Toast } from 'app/lib/toast';
import { BookService } from 'app/services/api/book.service';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class UserBooksComponent implements OnInit {

  public tableData: any;

  constructor(private authService: AuthService, private bookService: BookService,
    private toast: Toast,
  ) { }

  ngOnInit() {
    this.bookService.getUserBooks(this.authService.currentUser.id).subscribe(res => this.tableData = res.data);
  }

  returnBook(book) {
    this.bookService.returnBook(book.id).subscribe(() => {
      this.toast.success('O livro ' + book.title + ' foi devolvido!');
      this.tableData = this.tableData.filter(row => row.id !== book.id);
    });
  }

}
