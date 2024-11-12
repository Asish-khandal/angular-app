import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

import { BucketComponent } from "./components/bucket/bucket.component";
import { GroceryComponent } from "./components/grocery/grocery.component";
import { Store } from "@ngrx/store";
import { loadTodos } from "./store/actions/todos.actions";

import * as TodosActions from "./store/actions/todos.actions";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Angular_To_Do_App";
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask() {
    this.store.dispatch(loadTodos());
  }
}
