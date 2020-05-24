// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { ActionTypes } from './actions';
// import { BookService } from '../services/book.service';


// @Injectable()
// export class ShopEffects {
//     constructor(private action$: Actions, private bookService: BookService) {}

//     @Effect()
//     loadBooks$ = this.action$.pipe(
//         ofType(ActionTypes.LOAD_ITEMS),
//         mergeMap( () => this.bookService.getBooks().pipe(
//             map((books: any) => {
//                 return {type: ActionTypes.LOAD_SUCCESS, payload: books.items};
//             }),
//             catchError(() => EMPTY)
//         ) )
//     );
// }
