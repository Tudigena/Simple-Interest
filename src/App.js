import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [Add, setAdd] = useState("");
  let [resultContainer] = useState("");

  if (num1 === 0 || num2 === 0 || num3 === 0 || Add === "") {
    resultContainer = "containerNone";
  } else {
    resultContainer = "containerRight";
  }

  const calcSum = (e) => {
    e.preventDefault();
    console.log(e);

    if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
      alert("please enter a valid input");
      handleClick();
    } else {
      let Add = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      setAdd(parseInt(Add));
      console.log(setAdd);
    }
  };

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
    resultContainer = "containerNone";
  };

  return (
    <div className="bg-container">
      <h1 className="title">Simple Interest calculator</h1>
      <div className="main">
        <div className="container-left">
          <div className="input-wrapper">
            <form onSubmit={calcSum} className="wrapper">
              <label htmlFor="principal">Principal (Rs/-):</label>
              <input
                type="number"
                id="principal"
                value={num1 || ""}
                onChange={(e) => setNum1(e.target.value)}
              />
              <label htmlFor="rate">Rate (%):</label>
              <input
                type="number"
                id="rate"
                value={num2 || ""}
                onChange={(e) => setNum2(e.target.value)}
              />
              <label htmlFor="time">Time:</label>
              <input
                type="number"
                id="time"
                value={num3 || ""}
                onChange={(e) => setNum3(e.target.value)}
              />
              <div className="button">
                <button type="submit">Calculate</button>
                <button onClick={handleClick}>Reset</button>
              </div>
            </form>
          </div>
        </div>
        <div className={resultContainer}>
          <p>Principal Amount : {parseInt(num1)}</p>
          <p>Interest Amount : {parseInt(Add)}</p>
          <p>Total Amount : {parseInt(num1) + parseInt(Add)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
