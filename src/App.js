import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  const [dataChange, setDataChange] = useState(0);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
