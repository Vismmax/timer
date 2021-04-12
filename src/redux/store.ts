import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
