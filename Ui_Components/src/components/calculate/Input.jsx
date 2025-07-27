import React from "react";

const Input = ({ getInput,value }) => {
  function HandelChange(e) {
    const newValue = e.target.value;
    getInput(newValue);
  }
  return <input style={{border:"none", backgroundColor:"lightskyblue",padding:"5px",borderRadius:"5px",textAlign:"right"}} type="text" onChange={HandelChange} value={value}/>;
};

export default Input;
