import "./card.css";
import React from "react";
import "../assets/RatingIcon";
import { RatingIcon } from "../assets/RatingIcon";
export default function Card({ data }) {

  return (
    <div className="card-root-caintailer">
      <div className="Card">
        <img
          className="productImg"
          src={("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/") + data.info.cloudinaryImageId}
          alt="restaurant"
        />
        <div className="restaurantNameAndRating">
          <h3 className="restaurantName">{data.info.name}</h3>
          <div className="rating">
            {data.info.avgRating} <RatingIcon />
          </div>
        </div>
        <div className="CuisinePricing">
          <div className="cuisine">
            {data.info.cuisines.join(", ")}
          </div>
          <div className="pricingForTwo">{data.info.costForTwo}</div>
        </div>
        <div className="openAtAndDistance">
          <div className="location">{data.info.areaName}</div>
          <div className="distance">{data.info.sla.lastMileTravelString}</div>
        </div>
      </div>
    </div>
  );
}
