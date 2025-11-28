import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ];

  return (
    <div className="calculator">
      <Display value={input} />

      <div className="buttons">
        <Button label="C" onClick={handleClear} className="clear" />

        {buttons.map((btn) => (
          <Button
            key={btn}
            label={btn}
            onClick={
              btn === "=" ? handleCalculate : () => handleClick(btn)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;

