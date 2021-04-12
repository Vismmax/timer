import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TimerStarted from './TimerStarted';
import TimerProgress from './TimerProgress';
import TimerFinished from './TimerFinished';
import {
  minutesTimer,
  pauseTimer,
  resetTimer,
  secondsTimer,
  startTimer,
  statusTimer,
} from '../redux/timerSlice';
import TimerSound from './TimerSound';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    },
    main: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spacing(40),
      height: theme.spacing(50),
      padding: theme.spacing(5),
    },
  }),
);

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const status = useSelector(statusTimer);
  const minutes = useSelector(minutesTimer);
  const seconds = useSelector(secondsTimer);

  const handleStart = () => dispatch(startTimer());
  const handlePause = () => dispatch(pauseTimer());
  const handleReset = () => dispatch(resetTimer());

  return (
    <div className={classes.root}>
      <Paper className={classes.main} elevation={3}>
        {status === 'stop' && (
          <TimerStarted
            minutes={minutes}
            seconds={seconds}
            onStart={handleStart}
          />
        )}
        {(status === 'start' || status === 'pause') && (
          <TimerProgress
            status={status}
            minutes={minutes}
            seconds={seconds}
            onPause={handlePause}
            onReset={handleReset}
          />
        )}
        {status === 'done' && <TimerFinished onDismiss={handleReset} />}
        <TimerSound status={status} seconds={seconds} />
      </Paper>
    </div>
  );
}

export default App;
