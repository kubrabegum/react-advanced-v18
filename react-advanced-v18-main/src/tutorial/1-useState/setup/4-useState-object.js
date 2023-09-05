import React, { useState } from 'react';

const UseStateObject = () => {
  const[person, setPerson]=useState({
    name:"peter",
    age:"20",
    message:"random message"
  })

  const changed=()=>{
    if(person.message==="random message"){
      setPerson({...person,message:"Hello World"})
    }
    else{
      setPerson({...person,message:"random message"})
    }
  }

  return (
    <>
    <h2>
    {person.name}
    </h2>
    <h2>{person.age}</h2>
    <h2>{person.message}</h2>
    <button onClick={changed}>Change msg</button>
    </>
  );
};

export default UseStateObject;
