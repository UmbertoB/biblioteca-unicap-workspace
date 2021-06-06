import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { CrudMethods } from 'app/lib/crud-methods';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService extends CrudMethods {

  constructor(public http: HttpClient) {
    super();
    this.entity = 'books';
  }

  public getUserBooks(userId: number) {
    return this.http.get<{ data: any }>(`${environment.baseUrl}/api/${this.entity}/my-books/${userId}`);
  }

  public getUserBooksCount(userId: number) {
    return this.http.get<{ data: number }>(`${environment.baseUrl}/api/${this.entity}/my-books/${userId}/count`);
  }

  public getAvaiableBooksCount() {
    return this.http.get<{ data: number }>(`${environment.baseUrl}/api/${this.entity}/count-avaiable`);
  }

  public rentBook(userId: number, bookId: number) {
    return this.http.post<{ data: any }>(`${environment.baseUrl}/api/${this.entity}/rent`, { userId, bookId });
  }

  public returnBook(bookId: number) {
    return this.http.post<{ data: any }>(`${environment.baseUrl}/api/${this.entity}/return`, { bookId });
  }

}