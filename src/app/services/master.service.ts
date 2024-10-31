import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itodos } from '../model/interface/todos';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getAllToDos(): Observable<Itodos[]> {
    return this.http.get<Itodos[]>(`${this.apiUrl}todos`);
  }

  addToDos(obj: any): Observable<Itodos> {
    return this.http.post<Itodos>(`${this.apiUrl}todos`, obj);
  }

  deleteToDosById(id: number): Observable<Itodos[]> {
    return this.http.delete<Itodos[]>(`${this.apiUrl}todos/${id}`);
  }

  updateToDos(todo: Itodos): Observable<Itodos> {
    return this.http.put<Itodos>(`${this.apiUrl}todos/${todo.id}`, todo);
  }
}
