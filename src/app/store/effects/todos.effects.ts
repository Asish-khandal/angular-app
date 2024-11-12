import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as TodosActions from "../actions/todos.actions";
import { MasterService } from "../../services/master.service";

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private masterService: MasterService
  ) {}

  loadTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.loadTodos),
        mergeMap(() =>
          this.masterService.getAllToDos().pipe(
            map((todos) => TodosActions.loadTodosSuccess({ todos })),
            catchError((error) => of(TodosActions.loadTodosFailure({ error })))
          )
        )
      ),
    { functional: true }
  );

  addTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.addTodo),
        mergeMap(({ todo }) =>
          this.masterService.addToDos(todo).pipe(
            map((newTodo) => TodosActions.addTodoSuccess({ todo: newTodo })),
            catchError((error) => of(TodosActions.loadTodosFailure({ error })))
          )
        )
      ),
    { functional: true }
  );
  deleteTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.deleteTodo),
        mergeMap(({ id }) =>
          this.masterService.deleteToDosById(id).pipe(
            map(() => TodosActions.deleteTodoSuccess({ id })),
            catchError((error) => of(TodosActions.deleteTodoFailure({ error })))
          )
        )
      ),
    { functional: true }
  );
}
