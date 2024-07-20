import { useEffect, useState } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/");
        console.log(response.data);
        setMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>{message}</>;
}

export default App;
