const Notification = ({ notificationData }) => {
  return (
    <div key={notificationData.id}>
      <h2>{notificationData.title}</h2>
      <p>{notificationData.details}</p>
    </div>
  );
};

export default Notification;
