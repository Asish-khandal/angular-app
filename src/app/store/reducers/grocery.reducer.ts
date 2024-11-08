import { createReducer, on } from "@ngrx/store";

import { groceryAction } from "../actions/grocery.action";
import { Grocery } from "../../model/interface/grocery.model";

// const initialState: Grocery[] = [
//   { id: 1, name: 'Apple', type: 'fruit' },
//   { id: 2, name: 'Banana', type: 'fruit' },
//   { id: 3, name: 'Orange', type: 'fruit' },
//   { id: 4, name: 'Lays chips', type: 'snacks' },
//   { id: 4, name: 'Zing chips', type: 'snacks' },
// ];
const initialState: Grocery[] = [];

export const groceryReducer = createReducer(
  initialState,
  on(groceryAction.loadGroceriesSuccess, (state, action) => {
    return action.payload;
  }),
  on(groceryAction.loadGroceriesFailure, (state, action) => {
    return [];
  })
);
