import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/notifications`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((arrayOfNotifications) => {
        setNotifications(arrayOfNotifications);
      });
  }, []);

  return (
    <div>
      <header>Resilia Take Home</header>
      <div>
        {notifications &&
          notifications.map((notificationData) => {
            return (
              <div key={notificationData.id}>
                <h2>{notificationData.title}</h2>
                <p>{notificationData.details}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
