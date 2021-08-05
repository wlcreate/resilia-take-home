import { useState } from "react";
import "./Notification.css";

const Notification = ({ notificationData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = (evt) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Notification-div">
      <h2 className="Notification-title">{notificationData.title}</h2>
      {isOpen ? (
        <p className="Notification-details">{notificationData.details}</p>
      ) : (
        <></>
      )}
      {isOpen ? (
        <p onClick={toggleDetails} className="Notification-toggle">
          Close
        </p>
      ) : (
        <p onClick={toggleDetails} className="Notification-toggle">
          View Details
        </p>
      )}
    </div>
  );
};

export default Notification;
