import { useState } from "react";
import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("skyblue");
  const [count, setCount] = useState(0);
  const [isBlack, setIsBlack] = useState(true);

  const colors = [
    "papayawhip",
    "thistle",
    "peachpuff",
    "lightgoldenrodyellow",
    "paleturquoise",
  ];

  const handleColorChange = () => {
    const index = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[index]);
    setCount(count + 1);
  };

  const handleToggle = () => {
    setIsBlack(!isBlack);
  };

  const handleReset = ()=> {
    setCount(0);
  }

  return (
    <div className={`app ${currentColor}`}>
      <button onClick={handleColorChange}>Change color</button>
      <h2>{currentColor}</h2>
      <h3 className={isBlack ? "black-text" : "white-text"}>
        The color has been changed {count} times.
      </h3>
      <button onClick={handleReset}>Reset counter</button>
      <button onClick={handleToggle}>Toggle font color</button>
    </div>
  );
}

export default App