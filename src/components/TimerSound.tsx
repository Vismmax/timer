import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import useSound from 'use-sound';

import { Status } from '../redux/timerSlice';
import tickSfx from '../assets/tick.mp3';
import alarmSfx from '../assets/alarm.mp3';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      left: theme.spacing(1),
      top: theme.spacing(1),
    },
  }),
);

interface Props {
  status: Status;
  seconds: number;
}

export default function TimerSound({ status, seconds }: Props) {
  const classes = useStyles();

  const [sound, setSound] = useState(true);

  const [tick] = useSound(tickSfx, { soundEnabled: sound });
  const [alarm] = useSound(alarmSfx, { soundEnabled: sound });

  useEffect(() => {
    if (status === 'start') tick();
  }, [seconds]);

  useEffect(() => {
    if (status === 'done') alarm();
  }, [status]);

  const handleClick = () => {
    setSound(!sound);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleClick}>
        {sound ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </div>
  );
}
