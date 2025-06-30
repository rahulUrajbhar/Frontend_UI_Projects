"use-client";
import React from "react";
import ProgressBar from "../components/progress/progressBar";
export default function Home() {

  return (
    <div>
      <h1>Progress Bar</h1>
      <ProgressBar progress={3}/>
    </div>
  );
}
