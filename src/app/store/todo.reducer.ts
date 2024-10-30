import { createReducer, on, Action } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  startDate: string;
  endDate: string;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
};

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title, startDate, endDate }) => ({
    ...state,
    todos: [
      ...state.todos,
      { id: state.todos.length + 1, title, completed: false, startDate, endDate }
    ]
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }))
);

export function todoReducer(state: TodoState | undefined, action: Action): TodoState {
  return _todoReducer(state, action);
}
