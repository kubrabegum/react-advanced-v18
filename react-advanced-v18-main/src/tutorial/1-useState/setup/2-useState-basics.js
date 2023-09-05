import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text , changeText]=useState("first word")
  const handle=()=>{
    if(text==="first word"){
      changeText("chaned content")
    }
    else{
      changeText("first word")
    }
  }
  return <>
  <h2>{text}</h2>
  <button onClick={handle}>Change content</button>
  </>;
};

export default UseStateBasics;


