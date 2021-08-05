import { useEffect, useState } from "react";
import "./App.css";
import NotificationsContainer from "./components/Notifications/NotificationsContainer/NotificationsContainer";

function App() {
  const [notifications, setNotifications] = useState([]);

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
      <header className="App-header">
        <p>Resilia Take Home</p>
      </header>
      <h1 className="App-heading">Notifications</h1>
      <NotificationsContainer notifications={notifications} />
    </div>
  );
}

export default App;
