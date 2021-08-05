import { useState } from "react";

const Notification = ({ notificationData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = (evt) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>{notificationData.title}</h2>
      {isOpen ? <p>{notificationData.details}</p> : <></>}
      {isOpen ? (
        <p onClick={toggleDetails}>Close</p>
      ) : (
        <p onClick={toggleDetails}>View Details</p>
      )}
    </div>
  );
};

export default Notification;
