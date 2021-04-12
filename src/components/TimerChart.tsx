import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'inline-flex',
    },
    main: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  }),
);

interface Props {
  value: number;
  max?: number;
  title: string;
}

export default function TimerChart({ value, max = 60, title }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant='determinate'
        size={100}
        value={(value * 100) / max}
      />
      <Grid
        className={classes.main}
        container
        direction='column'
        justify='center'
      >
        <Grid item container justify='center'>
          <Typography variant='caption' component='div'>
            {title}
          </Typography>
        </Grid>
        <Grid item container justify='center'>
          <Typography variant='h4' component='div'>
            {value}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
