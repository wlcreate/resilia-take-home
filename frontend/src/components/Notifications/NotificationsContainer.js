import Notification from "./Notification";

const NotificationsContainer = ({ notifications }) => {
  return (
    <div>
      {notifications &&
        notifications.map((notificationData) => {
          return (
            <Notification
              key={notificationData.id}
              notificationData={notificationData}
            />
          );
        })}
    </div>
  );
};

export default NotificationsContainer;
