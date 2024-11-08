import { createReducer, on } from "@ngrx/store";

import { addToBucket, removeFromBucket } from "../actions/bucket.action";
import { Action } from "rxjs/internal/scheduler/Action";
import { Bucket } from "../../model/interface/bucket.model";

const initialState: Bucket[] = [];

export const bucketReducer = createReducer(
  initialState,
  on(addToBucket, (state, action) => {
    const bucketItem = state.find((item) => item.id == action.payload.id);
    if (bucketItem) {
      return state.map((item) => {
        return item.id == action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item;
      });
    } else {
      return [...state, action.payload];
    }
  }),
  on(removeFromBucket, (state, Action) => {
    const existingItem = state.find((item) => item.id === Action.payload.id);
    if (existingItem && existingItem.quantity > 1) {
      return state.map((item) => {
        return item.id == Action.payload.id
          ? { ...item, quality: item.quantity - 1 }
          : item;
      });
    } else {
      return state.filter((item) => item.id !== Action.payload.id);
    }
  })
);
