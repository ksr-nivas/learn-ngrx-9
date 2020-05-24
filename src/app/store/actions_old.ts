import { Action } from '@ngrx/store';

interface Book {
    title: string;
    description: string;
    author?: string;
    price?: number;
    image?: string;
}

export enum ActionTypes {
    ADD_TO_CART = '[Book] Add to cart',
    REMOVE_FROM_CART = '[Book] Remove from cart',
    LOAD_ITEMS = '[Books] Load items from server',
    LOAD_SUCCESS = '[Books] Load success'
}

export class AddToCart implements Action {
    readonly type = ActionTypes.ADD_TO_CART;

    constructor(public payload: Book) {}
}

export class GetItems implements Action {
    readonly type = ActionTypes.LOAD_ITEMS;
}

export class RemoveFromCart implements Action {
    readonly type = ActionTypes.REMOVE_FROM_CART;

    constructor(public payload: Book) {}
}

export class LoadItems implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Book[]) {}
}

export type Actions_Union = AddToCart | RemoveFromCart | GetItems | LoadItems;
