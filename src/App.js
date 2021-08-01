import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [operation, setOperation] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [prevNumber2, setPrevNumber2] = useState('');
  const [isEqual, setIsEqual] = useState(false)

  const handleClear = ()=>{
    setInputValue('');
    setOperation('');
    setPrevNumber('');
    setPrevNumber2('');
    setIsEqual(false);
  }

  const handleSign = (e) =>{
    if (e.target.value){
      const sign = parseFloat(inputValue) * (-1)
      setInputValue(sign.toString())
    }
  }

  const handleInputValue = (e) =>{
    setInputValue(prev => prev + e.target.value);
  }

  const handleZero = (e) =>{
    if (inputValue !== ''){
      setInputValue(prev => prev + e.target.value)
    }
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

  const handleDot = (e) =>{
    if (inputValue !== ''){
      setInputValue(prev => prev + e.target.value)
    }
  }

  const handleEqual = () =>{
    setPrevNumber2(inputValue);
    setIsEqual(true)
  }

  useEffect(() =>{
    let nosense=0;
      if (prevNumber2 !==''){
        if (operation === '+'){
          nosense = parseFloat(prevNumber) + parseFloat(prevNumber2);
          if (isEqual){
            setInputValue(nosense.toString());
            setPrevNumber('');
            setPrevNumber2('');
          }else{
            setInputValue('');
            setPrevNumber(nosense.toString());
            setPrevNumber2('');
          }
        }
        if (operation === '%'){
          nosense = parseFloat(prevNumber) % parseFloat(prevNumber2);
          if (isEqual){
            setInputValue(nosense.toString());
            setPrevNumber('');
            setPrevNumber2('');
          }else{
            setInputValue('');
            setPrevNumber(nosense.toString());
            setPrevNumber2('');
          }
        }
        if (operation === '-'){
          nosense = parseFloat(prevNumber) - parseFloat(prevNumber2);
          if (isEqual){
            setInputValue(nosense.toString());
            setPrevNumber('');
            setPrevNumber2('');
          }else{
            setInputValue('');
            setPrevNumber(nosense.toString());
            setPrevNumber2('');
          }
        }
        if (operation === '*'){
          nosense = parseFloat(prevNumber) * parseFloat(prevNumber2);
          if (isEqual){
            setInputValue(nosense.toString());
            setPrevNumber('');
            setPrevNumber2('');
          }else{
            setInputValue('');
            setPrevNumber(nosense.toString());
            setPrevNumber2('');
          }
        }
        if (operation === '/'){
          nosense = parseFloat(prevNumber) / parseFloat(prevNumber2);
          if (isEqual){
            setInputValue(nosense.toString());
            setPrevNumber('');
            setPrevNumber2('');
          }else{
            setInputValue('');
            setPrevNumber(nosense.toString());
            setPrevNumber2('');
          }
        }
        setIsEqual(false)
      }
  },[prevNumber2])
 
  return (
    <div className="App">
      <input className="numbers" type="text" readOnly value={inputValue}/>
      <div className="buttons">
        <div className="buttons-row">
          <button onClick={handleClear}>A/C</button>
          <button onClick={handleSign} value={inputValue}>+/-</button>
          <button onClick={handleOperation} value='%'>%</button>
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
          <button onClick={handleZero} value ='0'>0</button>
          <button onClick={handleDot} value='.'>.</button>
          <button onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
