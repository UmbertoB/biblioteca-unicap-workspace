import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/services/api/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast } from 'app/lib/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  public typesOptions: any;

  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private toast: Toast,
    private router: Router
  ) { }

  ngOnInit() {

    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  public submit() {

    if (this.bookForm.valid) {

      const { value } = this.bookForm;

      const book = {
        title: value.title,
        description: value.description,
      }

      this.bookService.post(book)
        .subscribe(
          (res) => {
            this.toast.success('Criado com sucesso');
            this.router.navigate(['library-books']);
          },
          () => {
            this.toast.warning('Ocorreu um problema no processamento');
          });
    }

  }

}
