import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="user" content="Reacitvities" />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
