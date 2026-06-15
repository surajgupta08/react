import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // const counter = 15;

  let [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter(counter + 1);
    console.log("Clicked", { counter });
  };
  const removeValue = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>

      <footer>{counter}</footer>
    </>
  );
}

export default App;
