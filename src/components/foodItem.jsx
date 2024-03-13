import React from 'react'
const foodItem = ({changeHandler}) => {
  // const changeHandler = (event)=>{
  //   console.log(event.target.value);
  // }
  return (
    <div style={{width:"100%"}}>
        <input style={{width:"450px",margin:"10px 10px"}} type="text" placeholder='Enter food item...'  onChange={changeHandler}/>
    </div>
  )
}

export default foodItem