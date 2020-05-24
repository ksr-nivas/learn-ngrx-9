import { createAction, props, Action } from '@ngrx/store';
import { Observable } from 'rxjs';


interface Book {
    title: string;
    description: string;
}

export const AddToCart = createAction(
    '[Book] Add To Cart',
    props<{payload:Book}>()
);

export const GetItems = createAction(
    '[Book] Load Items'
);

export const RemoveFromCart = createAction(
    '[Book] Remove From Cart',
    props<{payload:Book}>()
);

export const LoadItems = createAction(
    '[Book] Load Items Success',
    props<{payload: Observable<Action>}>()
);