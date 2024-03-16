"use client";
import './index.css'
import React, { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import Display from './components/Display';
function App() {
  let [calc, setcalc] = useState("");
  const buttonOnClick = (buttonName)=>{
    if(buttonName=='C') setcalc("");
    else if(buttonName==='='){
      let result = eval(calc);
      setcalc(result);
    }
    else{
      const newDisp = calc + buttonName;
      setcalc(newDisp);
    }
  }
  return (
    <div className='mainitem' >
      <Display DispValue = {calc}></Display>
      <ButtonContainer buttonOnClick={buttonOnClick}></ButtonContainer>
      
    </div>
  )
}

export default App
