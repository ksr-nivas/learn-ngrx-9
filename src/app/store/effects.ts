import { Injectable } from "@angular/core";
import { BookService } from '../services/book.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as ShopActions from './actions';
import { Observable, EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class ShopEffects {
    constructor(private action$: Actions, private bookService: BookService) { }

    loadBooks$ = createEffect(() =>
        this.action$.pipe(
            ofType(ShopActions.GetItems),
            mergeMap(() => this.bookService.getBooks().pipe(
                map((books: any) => {
                    return ShopActions.LoadItems({payload: books.items});
                }),
                catchError(() => EMPTY)
            ))
        )
    )
}