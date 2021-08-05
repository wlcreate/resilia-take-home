const Notification = ({ notificationData }) => {
  return (
    <div>
      <h2>{notificationData.title}</h2>
      <p>{notificationData.details}</p>
    </div>
  );
};

export default Notification;
