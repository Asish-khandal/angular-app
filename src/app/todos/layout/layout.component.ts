import { CommonModule, SlicePipe } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { MasterService } from "../../services/master.service";
import { Itodos } from "../../model/interface/todos";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import * as TodosActions from "../../store/actions/todos.actions";
import { Store } from "@ngrx/store";
import { loadTodos } from "../../store/actions/todos.actions";
import { selectAllTodos } from "../../store/selectors/todos.selectors";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [FormsModule, SlicePipe, CommonModule],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.css",
})
export class LayoutComponent {
  masterService = inject(MasterService);
  toDosList: Itodos[] = [];
  newTodo: Itodos = { userId: 1, id: 0, title: "", completed: false };
  todoToEdit!: Itodos;
  editMode: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAllTodos).subscribe((res: any) => {
      this.toDosList = res;
    });
  }

  // loadTask() {
  //   this.store.dispatch(loadTodos());
  //   // this.masterService.getAllToDos().subscribe((res: Itodos[]) => {
  //   //   this.toDosList = res;
  //   // });
  // }

  // onDeleteTask(id: number) {
  //   const isDelete = confirm("Are you sure you want to delete?");
  //   if (isDelete) {
  //     this.masterService.deleteToDosById(id).subscribe((res: Itodos[]) => {
  //       alert("Todos deleted successfully");

  //       this.toDosList = this.toDosList.filter((item) => item.id !== id);
  //     });
  //   }
  // }

  onDeleteTask(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.store.dispatch(TodosActions.deleteTodo({ id }));
    }
  }

  onAdd() {
    if (!this.newTodo.title) {
      alert("Please enter a task title.");
      return;
    }

    this.store.dispatch(TodosActions.addTodo({ todo: this.newTodo }));
    // // Reset input field after dispatching the action
    // this.newTodo = { userId: 1, id: 0, title: "", completed: false };
    this.masterService.addToDos(this.newTodo).subscribe({
      next: (res: Itodos) => {
        alert("Todo added successfully");
        this.toDosList.unshift(res);
        // Reset input
        this.newTodo = { userId: 1, id: 0, title: "", completed: false };
      },
      error: (err) => {
        console.error("Error adding todo:", err);
        alert("Failed to add todo. Please try again.");
      },
    });
  }

  openEditDialog(item: Itodos) {
    this.todoToEdit = { ...item };
    this.editMode = true;
  }

  closeEditDialog() {
    this.editMode = false;
    // this.todoToEdit = null;
  }

  // onUpdate() {
  //   if (this.todoToEdit) {
  //     const index = this.toDosList.findIndex(
  //       (item) => item.id === this.todoToEdit!.id
  //     );
  //     if (index > -1) {
  //       this.toDosList[index] = { ...this.todoToEdit };
  //     }
  //     this.closeEditDialog();
  //     alert("Todo updated successfully");
  //   }
  // }

  onUpdate() {
    if (this.todoToEdit) {
      // Dispatch the edit action to update the todo in the NgRx store
      this.store.dispatch(TodosActions.editTodo({ todo: this.todoToEdit }));
      this.closeEditDialog();
      alert("Todo updated successfully");
    }
  }

  toggleStrike(item: Itodos) {
    // item.completed = !item.completed;

    // Dispatch the action to update the 'completed' status of the todo
    this.store.dispatch(
      TodosActions.toggleTodoCompletion({
        id: item.id,
        completed: !item.completed,
      })
    );
  }
}
