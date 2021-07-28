import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleNumber = (e) => {
    setInputValue(e.target.value);
  };

  // console.log(parseFloat(inputValue))
  return (
    <div className="App">
      <input
        className="numbers"
        type="text"
        onChange={handleNumber}
        value={inputValue}
      />
      <div className="buttons">
        <div className="buttons-row">
          <button onClick ={() => {setInputValue("")}}>A/C</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div className="buttons-row">
          <button
            onClick={() => {
              setInputValue(inputValue.concat("7"));
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setInputValue(inputValue.concat("8"));
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              setInputValue(inputValue.concat("9"));
            }}
          >
            9
          </button>
          <button>*</button>
        </div>
        <div className="buttons-row">
          <button
            onClick={() => {
              setInputValue(inputValue.concat("4"));
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setInputValue(inputValue.concat("5"));
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setInputValue(inputValue.concat("6"));
            }}
          >
            6
          </button>
          <button>-</button>
        </div>
        <div className="buttons-row">
          <button
            onClick={() => {
              setInputValue(inputValue.concat("1"));
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setInputValue(inputValue.concat("2"));
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setInputValue(inputValue.concat("3"));
            }}
          >
            3
          </button>
          <button>+</button>
        </div>
        <div className="buttons-row">
          <button
            className="nullButton"
            onClick={() => {
              setInputValue(inputValue.concat("0"));
            }}
          >
            0
          </button>
          <button onClick={ () => {setInputValue(inputValue.concat('.'))}}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
