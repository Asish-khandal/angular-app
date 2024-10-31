import { CommonModule, SlicePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Itodos } from '../../model/interface/todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FormsModule, SlicePipe, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  masterService = inject(MasterService);
  toDosList: Itodos[] = [];
  newTodo: Itodos = { userId: 1, id: 0, title: '', completed: false };
  todoToEdit: Itodos | null = null;
  editMode: boolean = false;

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask() {
    this.masterService.getAllToDos().subscribe((res: Itodos[]) => {
      this.toDosList = res;
    });
  }

  onDeleteTask(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.masterService.deleteToDosById(id).subscribe((res: Itodos[]) => {
        alert('Todos deleted successfully');

        this.toDosList = this.toDosList.filter((item) => item.id !== id);
      });
    }
  }

  onAdd() {
    if (!this.newTodo.title) {
      alert('Please enter a task title.');
      return;
    }

    this.masterService.addToDos(this.newTodo).subscribe({
      next: (res: Itodos) => {
        alert('Todo added successfully');
        this.toDosList.unshift(res);
        // Reset input
        this.newTodo = { userId: 1, id: 0, title: '', completed: false };
      },
      error: (err) => {
        console.error('Error adding todo:', err);
        alert('Failed to add todo. Please try again.');
      },
    });
  }

  openEditDialog(item: Itodos) {
    this.todoToEdit = { ...item };
    this.editMode = true;
  }

  closeEditDialog() {
    this.editMode = false;
    this.todoToEdit = null;
  }

  onUpdate() {
    if (this.todoToEdit) {
      const index = this.toDosList.findIndex(
        (item) => item.id === this.todoToEdit!.id
      );
      if (index > -1) {
        this.toDosList[index] = { ...this.todoToEdit };
      }
      this.closeEditDialog();
      alert('Todo updated successfully');
    }
  }

  toggleStrike(item: Itodos) {
    item.completed = !item.completed;
  }
}
