import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BooksService } from '../../services/books.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id;
  book;
  books;
  commentForm: FormGroup;

  addComment()
  {
    var book_id = this.commentForm.get('id').value;
    var username = this.commentForm.get('username').value;
    var email = this.commentForm.get('email').value;
    var comment = this.commentForm.get('message').value;
    this.books[this.id-1].comments.push({"username" : username, "email" : email, "comment" : comment});
    console.log(this.books[this.id-1].comments);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService : BooksService,
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.book = this.booksService.get_book_by_id(this.id);
    this.books = this.booksService.get_books();
    this.commentForm = new FormGroup({
      'id' : new FormControl(null),
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    });
  }

}
