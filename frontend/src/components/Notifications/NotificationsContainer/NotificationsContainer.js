import "./NotificationsContainer.css";
import Notification from "../Notification/Notification";

const NotificationsContainer = ({ notifications }) => {
  return (
    <div className="Notifications-Container">
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
