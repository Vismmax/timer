import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    input: {
      width: theme.spacing(10),
      '& input': {
        textAlign: 'center',
      },
    },
  }),
);

interface Props {
  value: number;
  title: string;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TimerInput({
  value,
  title,
  onIncrement,
  onDecrement,
}: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={1} alignItems='flex-end'>
      <Grid item>
        <Button variant='contained' size='small' onClick={onDecrement}>
          <RemoveIcon />
        </Button>
      </Grid>
      <Grid item>
        <TextField
          className={classes.input}
          id={title}
          label={title}
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={value}
        />
      </Grid>
      <Grid item>
        <Button variant='contained' size='small' onClick={onIncrement}>
          <AddIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
