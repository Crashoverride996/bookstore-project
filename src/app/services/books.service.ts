import { Injectable } from '@angular/core';
import books from '../books.json';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  
  books = books;
  
  get_books()
  {
    return this.books;
  }

  get_book_by_id(id:number)
  {
    return books[id-1]
  }
}
