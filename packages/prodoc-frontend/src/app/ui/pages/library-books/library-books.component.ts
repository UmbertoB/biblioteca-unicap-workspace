import { Component, OnInit } from '@angular/core';
import { Toast } from 'app/lib/toast';
import { BookService } from 'app/services/api/book.service';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-library-books',
  templateUrl: './library-books.component.html',
  styleUrls: ['./library-books.component.scss']
})
export class LibraryBooksComponent implements OnInit {

  public tableData: any;

  constructor(public authService: AuthService, private bookService: BookService,
    private toast: Toast) { }

  ngOnInit() {
    this.bookService.get().subscribe(res => this.tableData = res.data);
  }

  rentBook(book) {
    this.bookService.rentBook(this.authService.currentUser.id, book.book_id).subscribe(() => {
      book.isrent = this.authService.currentUser.id;
      book.username = this.authService.currentUser.username;
      this.toast.success('O livro ' + book.title + ' foi alugado!');
    });
  }

}
