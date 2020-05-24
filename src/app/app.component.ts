import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetItems } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cart: [];
  numberOfItems: number;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(GetItems());

    this.store.select('shop').subscribe((data:any) => {
      this.cart = data.cart;
      this.numberOfItems = this.cart.length;
    })
  }
}
