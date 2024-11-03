import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState("Text inside the input")

  return (<div className="App">
    <ClassCounter/>
  </div>);
}

export default App;