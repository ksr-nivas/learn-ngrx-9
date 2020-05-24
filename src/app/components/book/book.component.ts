import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Store } from '@ngrx/store';

import * as ShopActions from '../../store/actions';


interface Book {
  title: string;
  description: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: any;
  inCart: boolean = false;

  constructor(
    private acRoute: ActivatedRoute,
    private bookService: BookService,
    private store: Store<{items: [], cart: []}>
  ) { }

  ngOnInit(): void {
    this.acRoute.paramMap.subscribe(params => {
      this.getBookDetails(params.get('link'));
    })
  }

  getBookDetails(link) {
    this.bookService.getBookDetails(link).subscribe(data => {
      this.book = data;
    });
  }

  addToCart() {
    const {title, description} = this.book.volumeInfo;
    const book: Book = {title, description};
    this.store.dispatch(ShopActions.AddToCart({payload: book}));
    this.inCart = true;
  }

}
