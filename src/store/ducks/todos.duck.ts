/* eslint-disable */
// Arquivo de exemplo e ajuda sem tipagens e interfaces
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk } from 'store'


import { Todos } from 'components/TodoList'
import api from 'services/api';

import { RootState } from 'store';


interface State {
  loading: boolean
  error: string | null
  todos: Todos[]
}

const initialState: State = {
  loading: false,
  error: null,
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodosStart(state: State) {
      state.loading = true
    },
    addNewTodo(state: State, action: PayloadAction<string>){

    },
    getTodosFailed(state: State, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    getAllTodosSuccess(state: State, action: PayloadAction<Todos[]>) {
      state.error = null
      state.todos = action.payload
      state.loading = false
    }
  }
})


export const { getAllTodosSuccess, getTodosFailed, getTodosStart} = todoSlice.actions;

export default todoSlice.reducer;

export const getAllTodos = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(getTodosStart())
    const response = await api.get<Todos[]>('/todos')
    dispatch(getAllTodosSuccess(response.data))
  } catch (err) {
    dispatch(getTodosFailed(err.toString()))

  }
}

export const removeTodo = (id: number): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(getTodosStart())

    const response = await api.delete(`/todos/${id}`);

    if(response.status !== 200)
      throw new Error("Ops..")

    const responseAllTodos = await api.get<Todos[]>('/todos')
    dispatch(getAllTodosSuccess(responseAllTodos.data))

  } catch (err) {
  dispatch(getTodosFailed(err.toString()))
  }
}

export const addTodo = (title: string, description: string): AppThunk => async (dispatch: Dispatch) => {

  try {
    dispatch(getTodosStart())

    const response = await api.post<Todos>('todos', {
      title,description
  })


  if(response.status !== 201)
    throw new Error("Ops..")


  const responseAllTodos = await api.get<Todos[]>('/todos')
    dispatch(getAllTodosSuccess(responseAllTodos.data));

  } catch (err) {
    dispatch(getTodosFailed(err.toString()))
  }

}

/** Seletor de estado do store já tipado */
export const selectExampleState = (state: RootState) => state.todoReducer;
