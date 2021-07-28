import React, {useState} from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState();
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  return (
    <div className="App">
      <input className="numbers" type="text"/>
      <div className="buttons">
        <div className="buttons-row">
          <button>A/C</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div className="buttons-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
        </div>
        <div className="buttons-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className="buttons-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="buttons-row">
          <button className="nullButton">0</button>
          <button>,</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
