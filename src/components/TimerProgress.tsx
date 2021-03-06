import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RefreshIcon from '@material-ui/icons/Refresh';

import TimerChart from './TimerChart';
import { Status } from '../redux/timerSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
    main: {
      width: '100%',
      height: '100%',
    },
  }),
);

interface Props {
  status: Status;
  minutes: number;
  seconds: number;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerProgress({
  status,
  minutes,
  seconds,
  onPause,
  onReset,
}: Props) {
  const classes = useStyles();

  const [startMinutes, setStartMinutes] = useState(1);

  useEffect(() => {
    setStartMinutes(minutes ? minutes : 1);
  }, []);

  return (
    <div className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction='column'
        justify='space-around'
      >
        <Grid item container justify='space-around'>
          <Grid item>
            <TimerChart value={minutes} max={startMinutes} title='Minutes' />
          </Grid>
          <Grid item>
            <TimerChart value={seconds} max={60} title='Seconds' />
          </Grid>
        </Grid>
        <Grid item container direction='column' spacing={3}>
          <Grid item container justify='center'>
            <Button
              variant='contained'
              size='large'
              color='primary'
              startIcon={status === 'start' ? <PauseIcon /> : <PlayArrowIcon />}
              onClick={onPause}
            >
              {status === 'start' ? 'Pause' : 'Start'}
            </Button>
          </Grid>
          <Grid item container justify='center'>
            <Button
              variant='contained'
              size='large'
              color='secondary'
              startIcon={<RefreshIcon />}
              onClick={onReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
