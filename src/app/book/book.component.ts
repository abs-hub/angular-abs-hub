import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from './../providers/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Array<string> = [];
  sub: any;

  // create instance of BookService
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    let userName = '';
    this.sub = this.route.queryParams.subscribe((params) => {
      userName = params['username'];
    });
    if (userName) {
      this.books = this.bookService.getBooks();
    } else {
      this.router.navigate(['/']);
    }
  }
}
