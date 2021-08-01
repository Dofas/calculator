import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [operation, setOperation] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [prevNumber2, setPrevNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleInputValue = (e) =>{
    setInputValue(prev => prev + e.target.value);
  }

  const handleOperation = (e) =>{
    setOperation(e.target.value);
    if (prevNumber === '') {
      setPrevNumber(inputValue);
      
    } else {
      setPrevNumber2(inputValue)
  
    }
    setInputValue('');
  }

  useEffect(() =>{
    let nosense=0;
      if (prevNumber2 !==''){
        if (operation === '+'){
          nosense = parseFloat(prevNumber) + parseFloat(prevNumber2);
        }
        if (operation === '-'){
          nosense = parseFloat(prevNumber) - parseFloat(prevNumber2);
        }
        if (operation === '*'){
          nosense = parseFloat(prevNumber) * parseFloat(prevNumber2);
        }
        if (operation === '/'){
          nosense = parseFloat(prevNumber) / parseFloat(prevNumber2);
        }
        setInputValue(nosense.toString());
        setPrevNumber('');
        setPrevNumber2('');
      }
  },[prevNumber2])
 
  return (
    <div className="App">
      <input className="numbers" type="text" readOnly value={inputValue}/>
      <div className="buttons">
        <div className="buttons-row">
          <button>A/C</button>
          <button>+/-</button>
          <button>%</button>
          <button onClick={handleOperation} value='/'>/</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleInputValue} value='7'>7</button>
          <button onClick={handleInputValue} value='8'>8</button>
          <button onClick={handleInputValue} value='9'>9</button>
          <button onClick={handleOperation} value='*'>*</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleInputValue} value='4'>4</button>
          <button onClick={handleInputValue} value='5'>5</button>
          <button onClick={handleInputValue} value='6'>6</button>
          <button onClick={handleOperation} value='-'>-</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleInputValue} value='1'>1</button>
          <button onClick={handleInputValue} value='2'>2</button>
          <button onClick={handleInputValue} value='3'>3</button>
          <button onClick={handleOperation} value='+'>+</button>
        </div>
        <div className="buttons-row">
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
