import { createAction, props } from "@ngrx/store";
import { Itodos } from "../../model/interface/todos";

export const loadTodos = createAction("[Todo List] Load Todos");
export const loadTodosSuccess = createAction(
  "[Todo List] Load Todos Success",
  props<{ todos: Itodos[] }>()
);
export const loadTodosFailure = createAction(
  "[Todo List] Load Todos Failure",
  props<{ error: any }>()
);

export const addTodo = createAction(
  "[Todos] Add Todo",
  props<{ todo: Itodos }>()
);

export const addTodoSuccess = createAction(
  "[Todos] Add Todo Success",
  props<{ todo: Itodos }>()
);
export const deleteTodo = createAction(
  "[Todos] Delete Todo",
  props<{ id: number }>()
);

export const deleteTodoSuccess = createAction(
  "[Todos] Delete Todo Success",
  props<{ id: number }>()
);

export const deleteTodoFailure = createAction(
  "[Todos] Delete Todo Failure",
  props<{ error: any }>()
);

export const editTodo = createAction(
  "[Todos] Edit Todo",
  props<{ todo: Itodos }>()
);

export const toggleTodoCompletion = createAction(
  "[Todo] Toggle Todo Completion",
  props<{ id: number; completed: boolean }>()
);
