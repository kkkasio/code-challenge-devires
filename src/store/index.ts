import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import reducers from './ducks';

export type RootState = ReturnType<typeof reducers>;

const store = configureStore({ reducer: reducers });

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
