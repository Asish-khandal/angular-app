import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";

import { groceryAction } from "../actions/grocery.action";
import { GroceryService } from "../../services/grocery.service";

@Injectable()
export class ShopEffect {
  loadGroceries$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(groceryAction.loadGroceries),
        exhaustMap(() =>
          this.groceryService.fetchAllGroceries().pipe(
            map((groceries: any) =>
              groceryAction.loadGroceriesSuccess({ payload: groceries })
            ),
            catchError(() => of(groceryAction.loadGroceriesFailure()))
          )
        )
      ),
    { functional: true }
  );

  constructor(
    private actions$: Actions,
    private groceryService: GroceryService
  ) {}
}
