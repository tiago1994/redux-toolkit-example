import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/count/count-slice';
import todosReducer from '../features/todos/todos-slice';

export const store = configureStore({
  reducer: {
    count: countReducer,
    todos: todosReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;