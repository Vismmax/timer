import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export type Status = 'start' | 'pause' | 'stop' | 'done';

export interface TimerState {
  status: Status;
  minutes: number;
  seconds: number;
  intervalId: number;
}

const initialState: TimerState = {
  status: 'stop',
  minutes: 0,
  seconds: 0,
  intervalId: 0,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    incrementMinutes: (state) => {
      state.minutes = state.minutes === 999 ? 999 : state.minutes + 1;
    },
    decrementMinutes: (state) => {
      state.minutes = state.minutes === 0 ? 0 : state.minutes - 1;
    },
    incrementSeconds: (state) => {
      state.seconds = state.seconds === 59 ? 0 : state.seconds + 1;
    },
    decrementSeconds: (state) => {
      state.seconds = state.seconds === 0 ? 59 : state.seconds - 1;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setIntervalId: (state, action: PayloadAction<number>) => {
      state.intervalId = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const {
  incrementMinutes,
  decrementMinutes,
  incrementSeconds,
  decrementSeconds,
  setStatus,
  setIntervalId,
  reset,
} = timerSlice.actions;

export const statusTimer = (state: RootState) => state.timer.status;
export const minutesTimer = (state: RootState) => state.timer.minutes;
export const secondsTimer = (state: RootState) => state.timer.seconds;
export const intervalId = (state: RootState) => state.timer.intervalId;

export const tickTimer = (): AppThunk => (dispatch, getState) => {
  if (getState().timer.minutes === 0 && getState().timer.seconds === 1) {
    clearInterval(getState().timer.intervalId);
    dispatch(setStatus('done'));
  }
  if (getState().timer.minutes > 0 && getState().timer.seconds === 1) {
    dispatch(decrementMinutes());
  }
  dispatch(decrementSeconds());
};

export const startTimer = (): AppThunk => (dispatch, getState) => {
  const interval = window.setInterval(() => {
    dispatch(tickTimer());
  }, 1000);
  dispatch(setStatus('start'));
  dispatch(setIntervalId(interval));
};

export const pauseTimer = (): AppThunk => (dispatch, getState) => {
  if (getState().timer.status === 'start') {
    dispatch(setStatus('pause'));
    clearInterval(getState().timer.intervalId);
  } else {
    dispatch(startTimer());
  }
};

export const resetTimer = (): AppThunk => (dispatch, getState) => {
  clearInterval(getState().timer.intervalId);
  dispatch(reset());
};

export default timerSlice.reducer;
