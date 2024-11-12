import { Component, OnInit } from "@angular/core";

import { AsyncPipe, CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as To from "../../store/selectors/todos.selectors";
import { Itodos } from "../../model/interface/todos";
import * as TodosActions from "../../store/actions/todos.actions";
import * as fromStore from "../../store/selectors/todos.selectors";
@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.css",
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Itodos[]>;

  // constructor(private store: Store) {
  //   this.todos$ = this.store.select(selectAllTodos);
  // }
  constructor(private store: Store) {
    this.todos$ = this.store.select(fromStore.selectAllTodos);
  }

  ngOnInit(): void {
    // this.store.dispatch(TodosActions.loadTodos());
    const a = this.store;
    debugger;
  }
}
