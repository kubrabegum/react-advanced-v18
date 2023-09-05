import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value ,setValue]=useState(0)
  const button=()=>{
    setValue(value+1)
  }

  // const button2=()=>{
  //   setValue(value-1)
  // }


  return (
    <>
    <h2>{value}</h2>
    <button onClick={button}>Increment</button>
    <button onClick={()=>setValue(value-1)}>Decrement</button>
    <button onClick={()=>setValue(0)}>reset</button>
    </>
  );
};

export default UseStateCounter;
