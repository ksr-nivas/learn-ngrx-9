import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShopActions from '../../store/actions';


interface Book {
  title: string;
  description: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: [];

  constructor(private bookService: BookService, private router: Router, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('shop').subscribe((data:any) => {
      this.books = data.items;
    })
    // this.bookService.getBooks().subscribe((data: any) => {
    //   console.log(data);
      
    //   this.books = data.items;
    // })
  }

  bookDetails(book) {
    this.router.navigate(['/book-details', book.selfLink]);
  }

  addToCart(book) {
    const {title, description} = book.volumeInfo;
    const data: Book = {title, description};
    this.store.dispatch(ShopActions.AddToCart({payload: data}));
  }

}
