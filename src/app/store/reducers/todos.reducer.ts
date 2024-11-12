import { createReducer, on } from "@ngrx/store";
import * as TodosActions from "../actions/todos.actions";
import { Itodos } from "../../model/interface/todos";

export interface TodosState {
  todos: Itodos[];
  error: any;
}

export const initialState: TodosState = {
  todos: [],
  error: null,
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodosSuccess, (state, { todos }) => {
    debugger;
    return {
      ...state,
      todos,
    };
  }),
  on(TodosActions.addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [todo, ...state.todos], // Add the new todo at the beginning of the list
  })),

  on(TodosActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(TodosActions.editTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((item) =>
      item.id === todo.id ? { ...item, ...todo } : item
    ),
  })),
  on(TodosActions.toggleTodoCompletion, (state, { id, completed }) => ({
    ...state,
    todos: state.todos.map((item) =>
      item.id === id ? { ...item, completed } : item
    ),
  }))
);
