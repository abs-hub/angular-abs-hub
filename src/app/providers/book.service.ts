import { Injectable } from '@angular/core';

import { Book } from './../models/book.model';

import * as booksData from '../../assets/data/books.json';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = booksData;
  constructor() {}

  getBooks(): Array<any> {
    return this.books;
  }
}
