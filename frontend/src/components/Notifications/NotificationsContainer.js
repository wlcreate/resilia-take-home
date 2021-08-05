import Notification from "./Notification";

const NotificationsContainer = ({ notifications }) => {
  return (
    <div>
      {notifications &&
        notifications.map((notificationData) => {
          return <Notification notificationData={notificationData} />;
        })}
    </div>
  );
};

export default NotificationsContainer;
