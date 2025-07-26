"use client";
import React, { useRef, useState } from "react";

const UseSateDiff = () => {
  const [value, setValue] = useState();
  let n1 = useRef();
  let n2 = useRef();
  const HandelAdd = () => {
    const num1 = Number(n1.current.value);
    const num2 = Number(n2.current.value);
    if (isNaN(num1) || isNaN(num2)) {
      setValue("Enter the Valide input");
    } else {
      let result = num1 + num2;
      setValue(result);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <span>
        without useState is the way we can still achive what what state change
        but on every event its triger to rereder the page. for more
        understanding check code
        <br />
        Using the `useState` hook allows you to maintain the current value, so
        if the value doesn't change, the page won't re-render. This helps
        optimize performance by preventing unnecessary re-renders.
      </span>
      <div>
        <input ref={n1} type="text" /> +
        <input ref={n2} type="text" />
        <button onClick={HandelAdd}>Add</button>
      </div>
      <div>Result = {value}</div>
    </div>
  );
};

export default UseSateDiff;

/*
This is the way we can still achive what what state change but on every event its triger to rereder the page
Make Reason to use UseState hook its remember the pres value, so if value is not changes then it will not reranger the page


"use client"
import React, { useRef } from "react";

const UseSateDiff = () => {
    let n1 = useRef()
    let n2 = useRef()
    const HandelAdd = ()=>{
    let result = Number(n1.current.value) + Number(n2.current.value)    
    document.getElementById("ans").innerText = result
    }
  return (
    <div style={{display:"flex",flexDirection:"column", gap:"20px"}}>
      <div>
        <input ref={n1} type="number"/> +
        <input ref={n2} type="number"/>
        <button onClick={HandelAdd}>Add</button>
      </div>
      <div id="ans"></div>
    </div>
  );
};

export default UseSateDiff;
*/
