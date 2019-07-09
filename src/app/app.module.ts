import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BestsellingComponent } from './bestselling/bestselling.component';
import { BookComponent } from './books/book/book.component';
import { BestsellingBookComponent } from './bestselling/bestselling-book/bestselling-book.component';
import { ContactComponent } from './contact/contact.component';
import { AuthorComponent } from './author/author.component';

const appRoutes: Routes = [
  { path: 'bestselling', component: BestsellingComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: '',
    redirectTo: '/bestselling',
    pathMatch: 'full'
  },
  { path: 'contact', component: ContactComponent },
  { path: 'author', component: AuthorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BestsellingComponent,
    BookComponent,
    BestsellingBookComponent,
    ContactComponent,
    AuthorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
