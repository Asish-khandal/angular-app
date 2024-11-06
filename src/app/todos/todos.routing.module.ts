import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: "", component: LayoutComponent },
  {
    path: "add",
    component: AddTodoComponent,
  },
  {
    path: "list",
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
