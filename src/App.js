import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState("Text inside the input")

  return (<div className="App">
    <Counter/>
  </div>);
}

export default App;