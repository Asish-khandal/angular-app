import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodosState } from "../reducers/todos.reducer";

export const selectTodosState = createFeatureSelector<TodosState>("todos");

export const selectAllTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);
