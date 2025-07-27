"use client";
import React, { useState } from "react";
import "@/components/calculate/calcutater.css";
import Input from "@/components/calculate/Input";
import Button from "@/components/calculate/Button";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("");  // Tracks the number being typed
  const [operator, setOperator] = useState("");  // Tracks the operator (+, -, *, /)
  const [inputDis, setInputDis] = useState("");  // Display the full input string (for showing input and operator)

  const NumVal = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const ADD = "+";
  const SUB = "-";
  const MUL = "*";
  const DIV = "/";
  const ANS = "=";
  const AC = "AC";
  const CLEAR = "CLR";
  const Operators = [ADD, SUB, MUL, DIV, ANS, AC, CLEAR];

  // Function to calculate the result
  function Answer() {
    if (currentValue === "" || operator === "") return; // Check if there's enough data to calculate

    const prevValue = parseFloat(inputDis.split(operator)[0]);  // Previous number (before the operator)
    const currValue = parseFloat(currentValue);  // Current number (after the operator)

    let result;
    switch (operator) {
      case ADD:
        result = prevValue + currValue;
        break;
      case SUB:
        result = prevValue - currValue;
        break;
      case MUL:
        result = prevValue * currValue;
        break;
      case DIV:
        if (currValue === 0) {
          alert("Cannot divide by zero!");
          return;
        }
        result = prevValue / currValue;
        break;
      default:
        return;
    }
    setCurrentValue(result.toString());
    setOperator("");  // Reset operator after calculation
    setInputDis(result.toString());  // Update the display with the result
  }

  // Function to update the display value with the number being typed
  function InputValue(value) {
    setCurrentValue(value);
  }

  // Function to handle the input of numbers and operators
  function handleInput(value) {
    setCurrentValue((prev) => prev + value);  // Append the value to current input
    setInputDis((prev) => prev + value);  // Update the display input
  }

  // Function to handle operators (+, -, *, /, etc.)
  function handleOperator(value) {
    if (value === AC) {
      setCurrentValue(""); // Clear the current value
      setInputDis(""); // Reset the display
      setOperator(""); // Reset the operator
      return;
    }

    if (value === CLEAR) {
      setCurrentValue(""); // Clear the current input
      setInputDis((prev) => prev.slice(0, -1)); // Remove the last character from the display
      return;
    }

    if (value === ANS) {
      Answer(); // Perform the calculation when "=" is pressed
    } else {
      if (currentValue === "") return;  // Do nothing if there's no current value
      setOperator(value);  // Set the operator
      setInputDis((prev) => prev + value); // Update the display with the operator
      setCurrentValue(""); // Clear the current value to input the next number
    }
  }

  return (
    <div className="calculaterContainer">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Input getInput={InputValue} value={inputDis} />
        <div style={{ display: "flex", alignItems: "center" }}>
          {NumVal.map((Num) => (
            <Button key={Num} label={Num} inputNum={handleInput} />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {Operators.map((oper) => (
            <Button key={oper} label={oper} inputNum={handleOperator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
