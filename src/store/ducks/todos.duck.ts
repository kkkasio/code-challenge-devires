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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


export const getAllTodos = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(getTodosStart())
    const response = await api.get<Todos[]>('/todos')
    dispatch(getAllTodosSuccess(response.data))
  } catch (err) {
    dispatch(getTodosFailed(err.toString()))

  }
}


/** Seletor de estado do store já tipado */
export const selectExampleState = (state: RootState) => state.todoReducer;
