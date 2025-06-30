"use client";
import React, { useEffect, useState } from "react";
import "./Progress.css";

export default function ProgressBar({ progress }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="outerBar">
      <div
        className="innerBar"
        // style={{ width:`${value}%` }}
        style={{ transform: `translateX(${value - 100}%)` }}
      >
        {progress}%
      </div>
    </div>
  );
}
