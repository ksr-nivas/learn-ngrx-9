import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  URL: string = 'https://www.googleapis.com/books/v1/volumes?q=quilting';

  constructor(private _http: HttpClient) { }

  getBooks() {
    return this._http.get(this.URL);
  }

  getBookDetails(link) {
    return this._http.get(link);
  }
}
