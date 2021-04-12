import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div></div>
    </div>
  );
}

export default App;
