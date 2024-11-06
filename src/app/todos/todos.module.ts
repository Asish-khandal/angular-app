import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosRoutingModule } from "./todos.routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodosRoutingModule,
    LayoutComponent,
    AddTodoComponent,
    TodoListComponent,
  ],
})
export class TodosModule {}
