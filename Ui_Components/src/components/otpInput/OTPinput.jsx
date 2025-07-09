"use client";
import React, { useEffect, useRef, useState } from "react";
import "./otpinput.css";

const OTP_DIGIT_COUNT = 5;

const OTPinput = () => {
  const [otpInput, setOtpInput] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  const arrRef = useRef([]);

  useEffect(() => {
    arrRef.current[0]?.focus();
  }, []);

  function handelChange(value, index) {
    if (isNaN(value)) {
      return;
    }
    const newArr = [...otpInput];
    newArr[index] = value.trim().slice(-1);
    setOtpInput(newArr);
    if (value !== "") {
      arrRef.current[index + 1]?.focus();
    }
  }

  function handelFocus(e, index) {
    if (!e.target.value && e.key === "Backspace") {
      arrRef.current[index - 1]?.focus();
    }
  }

  return (
    <div className="container">
      <h1>Otp Input</h1>
      <div className="bodyContainer">
        {otpInput.map((otp, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                key={index}
                ref={(input) => (arrRef.current[index] = input)}
                value={otpInput[index]}
                onChange={(e) => handelChange(e.target.value, index)}
                className="numInput"
                onKeyDown={(e) => handelFocus(e, index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OTPinput;
