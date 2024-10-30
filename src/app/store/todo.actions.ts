import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add Todo', props<{ title: string, startDate: string, endDate: string }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{ id: number }>());
