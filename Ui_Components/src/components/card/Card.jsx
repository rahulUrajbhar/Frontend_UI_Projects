import React from "react";
import "./card.css";
const Card = ({ title, price, thumbnail }) => {
  return (
    <div className="cardContainer">
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <div className="disContainer">
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default Card;
