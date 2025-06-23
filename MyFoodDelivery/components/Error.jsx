import "./error.css";
import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Opps!!!</h1>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};
