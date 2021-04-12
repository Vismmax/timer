import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
  onDismiss: () => void;
}

export default function TimerFinished({ onDismiss }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction='column'
        justify='space-around'
      >
        <Grid item container justify='center' alignItems='center'>
          <Typography variant='h2' color='secondary' align='center'>
            Timer done!
          </Typography>
        </Grid>

        <Grid item container justify='center'>
          <Button
            variant='contained'
            size='large'
            color='primary'
            startIcon={<ExitToAppIcon />}
            onClick={onDismiss}
          >
            Dismiss
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
