import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;

  constructor(
    private booksService : BooksService
  ) { }

  ngOnInit() {
    this.books = this.booksService.get_books();
  }

}
