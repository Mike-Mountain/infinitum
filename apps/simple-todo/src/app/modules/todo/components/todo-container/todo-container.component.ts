import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../store/todo.service';
import { TodoQuery } from '../../store/todo.query';
import { Observable } from 'rxjs';
import { Todo } from '../../store/todo.model';

@Component({
  selector: 'infinitum-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  public todos$: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService,
              private todoQuery: TodoQuery) {
  }

  ngOnInit(): void {
    if (!this.todoQuery.getHasCache()) {
      this.todoService.getAllTodos().subscribe();
    }
    this.todos$ = this.todoQuery.selectAll();
  }

  updateTodo(todo: Todo) {
    const newTodo: Todo = {
      ...todo,
      isComplete: !todo.isComplete
    };
    this.todoService.updateTodo(todo.id, newTodo).subscribe();
  }
}
