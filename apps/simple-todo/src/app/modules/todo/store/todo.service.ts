import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { createTodo, Todo } from './todo.model';
import { TodoStore } from './todo.store';
import { ApiPath, BaseHttpService } from '@infinitum/shared-data';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TodoQuery } from './todo.query';

@Injectable({ providedIn: 'root' })
export class TodoService extends BaseHttpService {

  constructor(
    private todoStore: TodoStore,
    private todoQuery: TodoQuery,
    protected http: HttpClient
  ) {
    super(http);
    super.apiUrl = environment.apiUrl;
  }


  getAllTodos(): Observable<Todo[]> {
    return super._get<Todo[]>(ApiPath.TODOS).pipe(
      map(entities => entities.map(entity => createTodo(entity))),
      tap(entities => this.todoStore.set(entities))
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return super._get<Todo>(ApiPath.TODOS, id)
      .pipe(
        map(entity => createTodo(entity)),
        tap(entity => this.todoStore.update(entity))
      );
  }

  addTodo(project: Todo): Observable<Todo> {
    return super._post<Todo>(ApiPath.TODOS, project)
      .pipe(
        map(entity => createTodo(entity)),
        tap(entity => this.todoStore.add(entity))
      );
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    this.todoStore.update(id, todo);
    return this.todoQuery.selectEntity(id) as Observable<Todo>;
    // return super._put<Todo>(ApiPath.TODOS, id, todo)
    //   .pipe(
    //     map(entity => createTodo(entity)),
    //     tap(entity => this.todoStore.update(id, entity))
    //   );
  }

  removeTodo(id: number): Observable<Todo> {
    return super._delete<Todo>(ApiPath.TODOS, id)
      .pipe(
        tap(() => this.todoStore.remove(id))
      );
  }

}
