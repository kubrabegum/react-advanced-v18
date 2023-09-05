import React from 'react';

const ErrorExample = () => {
  let title= "random title"
  const handle=()=>{
    title="its me"
    console.log(title)
  }
  return <>
  <h2>{title}</h2>
  <button onClick={handle}>Change</button>
  </>;
};

export default ErrorExample;
