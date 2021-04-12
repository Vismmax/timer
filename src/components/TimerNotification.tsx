import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

import { Status } from '../redux/timerSlice';
import askNotificationPermission from '../helpers/askNotificationPermission';
import notificationsIcon from '../assets/notifications.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  }),
);

interface Props {
  status: Status;
}

export default function TimerNotification({ status }: Props) {
  const classes = useStyles();

  const [notify, setNotify] = useState(false);

  useEffect(() => {
    if (
      Notification.permission === 'denied' ||
      Notification.permission === 'default'
    ) {
      askNotificationPermission(handlePermission);
    } else {
      setNotify(true);
    }
  }, []);

  useEffect(() => {
    if (status === 'done') {
      new Notification('Timer done!', {
        body: 'Your timer is done.',
        icon: notificationsIcon,
      });
    }
  }, [status]);

  const handlePermission = (permission: NotificationPermission) => {
    if (permission === 'denied' || permission === 'default') {
      setNotify(false);
    } else {
      setNotify(true);
    }
  };

  const handleClick = () => {
    askNotificationPermission(handlePermission);
  };

  return (
    <div className={classes.root}>
      <IconButton disabled={notify} onClick={handleClick}>
        {notify ? <NotificationsIcon /> : <NotificationsOffIcon />}
      </IconButton>
    </div>
  );
}
