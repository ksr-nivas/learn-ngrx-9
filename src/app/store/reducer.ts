import { createReducer, on, Action } from '@ngrx/store'
import * as ShopActions from './actions';

export const initialState = {
    items: [],
    cart: []
}

const reducer = createReducer(
    initialState,
    on(ShopActions.LoadItems, (state, action: any) => {
        return {...state, items: action.payload}
    }),
    on(ShopActions.AddToCart, (state, action) => {
        return {...state, cart: [...state.cart, action.payload]}
    }),
    on(ShopActions.RemoveFromCart, (state, action) => {
        return {...state, cart: [...state.cart.filter(item => item.title !== action.payload.title)]}
    })
);

export function ShopReducer(state, action) {
    return reducer(state, action);
}