import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TimerStarted from './TimerStarted';
import TimerProgress from './TimerProgress';
import TimerFinished from './TimerFinished';

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

  const handleStart = () => {};

  return (
    <div className={classes.root}>
      <Paper className={classes.main} elevation={3}>
        {/* <TimerStarted minutes={3} seconds={20} onStart={handleStart} /> */}
        {/* <TimerProgress
          minutes={3}
          seconds={36}
          onPause={() => {}}
          onReset={() => {}}
        /> */}
        {/* <TimerFinished onDismiss={() => {}} /> */}
      </Paper>
    </div>
  );
}

export default App;
