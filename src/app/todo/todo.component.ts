import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../store/todo.reducer';
import { addTodo, removeTodo, toggleTodo } from '../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.todos$ = store.select(state => state.todos.todos);
  }

  addTodo(title: string, startDate: string, endDate: string) {
    this.store.dispatch(addTodo({ title, startDate, endDate }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }
}
