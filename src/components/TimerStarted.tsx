import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import TimerInput from './TimerInput';

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
    input: {
      width: theme.spacing(10),
    },
  }),
);

interface Props {
  minutes: number;
  seconds: number;
  onStart: () => void;
}

export default function TimerStarted({ minutes, seconds, onStart }: Props) {
  const classes = useStyles();

  const handleIncrementMinutes = () => {};
  const handleDecrementMinutes = () => {};
  const handleIncrementSeconds = () => {};
  const handleDecrementSeconds = () => {};

  return (
    <div className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction='column'
        justify='space-around'
      >
        <Grid item container direction='column' spacing={5}>
          <Grid item>
            <TimerInput
              value={minutes}
              title='Minutes'
              onIncrement={handleIncrementMinutes}
              onDecrement={handleDecrementMinutes}
            />
          </Grid>
          <Grid item>
            <TimerInput
              value={seconds}
              title='Seconds'
              onIncrement={handleIncrementSeconds}
              onDecrement={handleDecrementSeconds}
            />
          </Grid>
        </Grid>

        <Grid item container justify='center'>
          <Button
            variant='contained'
            size='large'
            color='primary'
            startIcon={<PlayArrowIcon />}
            onClick={onStart}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
