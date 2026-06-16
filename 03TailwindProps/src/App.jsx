import { useState } from "react";
import Card from "./components/Card";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center ">
        Hello world!
      </h1>
      <Card userName="ChaiAurCode"num="344"  />
      <Card userName="Suraj"/>
       
    </>
  );
}

export default App;
