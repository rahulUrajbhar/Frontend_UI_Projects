import "./shimmer.css";
import React from "react";

function ShimmerUi(n) {
  return(
  <div className="shimmerUi">
    <div className="shimmerImg"></div>
    <div className="restaurantNameAndRatingShimmer">
      <h3 className="restaurantNameShimmer"></h3>
      <div className="ratingShimmer"></div>
    </div>
    <div className="CuisinePricingShimmer">
      <div className="cuisineShimmer"></div>
      <div className="pricingForTwoShimmer"></div>
    </div>
    <div className="openAtAndDistanceShimmer">
      <div className="locationShimmer"></div>
      <div className="distanceShimmer"></div>
    </div>
  </div>
  );
}
export default function Shimmer() {
  const numComponents = 9;
  return(
    <div className="emptyCard">
    {Array.from({ length: numComponents }).map((_, index) => (
      <ShimmerUi key={index} />
    ))}
  </div>
  );
}
