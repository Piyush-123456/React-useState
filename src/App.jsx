"use client";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React from 'react';
import MainItem from './components/mainitem';
import FoodItem from './components/foodItem';
function App() {
  let arr = ["roti","Sabji","dal"]
  let TextToShow = useState("Show some Text");
  let textname = TextToShow[0];
  let setText = TextToShow[1];
  const changeHandler = (event)=>{
    console.log(event.target.value);
    setText(event.target.value)
  }
  return (
    
    <div>
      <h1>Healthy food</h1>
      <FoodItem changeHandler = {changeHandler}></FoodItem>
      <h1>{textname}</h1>
      <MainItem mainitem ={arr}></MainItem>
    
    </div>
 
  )
}

export default App
