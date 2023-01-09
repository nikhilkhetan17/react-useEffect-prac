import Card from "./components/Card";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log(data);

    const details1 = data.results[0];

    setDetails(details1);
    console.log(details1);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <Card myDetails={details} />
    </div>
  );
}

export default App;
