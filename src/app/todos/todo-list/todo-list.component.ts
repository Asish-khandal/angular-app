import { Component, OnInit } from "@angular/core";

import { AsyncPipe, CommonModule } from "@angular/common";

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.css",
})
export class TodoListComponent {}
