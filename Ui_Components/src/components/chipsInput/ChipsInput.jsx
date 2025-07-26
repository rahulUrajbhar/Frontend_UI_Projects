"use client";
import React, { useState } from "react";
import "./chipsInput.css";
const ChipsInput = () => {
  const [input, setInput] = useState("");
  const [InputData, setInputData] = useState([]);
  const handelChips = (e) => {
    if (e.key == "Enter" && input.trim() !== "") {
      setInputData([...InputData, input]);
      setInput("");
    }
  };
  const deleteChip = (index) => {
    let UpdateData = [...InputData];
    UpdateData.splice(index, 1);
    setInputData(UpdateData);
  };

  return (
    <div className="mainContainor">
      <div className="chipsHeader">
        <h2>Input Chips</h2>
        <input
          type="text"
          value={input}
          placeholder="Type a chip press Enter"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handelChips(e)}
        />
      </div>
      <div className="chipsContainer">
      {InputData.map((data, index) => {
        return (
          <span key={index} className="chips">
            <span>{data}</span>
            <button onClick={() => deleteChip(index)} className="delete">
              x
            </button>
          </span>
        );
      })}
      </div>
    </div>
  );
};

export default ChipsInput;
