export default function askNotificationPermission(
  callback: (permission: NotificationPermission) => void,
) {
  function handlePermission(permission: NotificationPermission) {
    if (!('permission' in Notification)) {
      //@ts-ignore
      Notification.permission = permission;
    }

    callback(permission);

    // set the button to shown or hidden, depending on what the user answers
    // if (
    //   Notification.permission === 'denied' ||
    //   Notification.permission === 'default'
    // ) {
    //   notificationBtn.style.display = 'block';
    // } else {
    //   notificationBtn.style.display = 'none';
    // }
  }

  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  } else {
    if (checkNotificationPromise()) {
      Notification.requestPermission().then((permission) => {
        handlePermission(permission);
      });
    } else {
      Notification.requestPermission(function (permission) {
        handlePermission(permission);
      });
    }
  }
}

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }

  return true;
}
