import { useEffect, useState } from "react";
import "./App.css";
import NotificationsContainer from "./components/Notifications/NotificationsContainer";

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
      <NotificationsContainer notifications={notifications} />
    </div>
  );
}

export default App;
