import "./cardList.css";
import React, { useState, useEffect } from "react";
const Card = React.lazy(() => import("./Card"));
import Shimmer from "./Shimmer";

export default function CardList() {
  const [listOfRestorent, setListOfRestorent] = useState([]);
  const [filteredRestorent, setFilteredRestorent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    const data = await fetch(
       ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    );
    const json = await data.json();
    setListOfRestorent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestorent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleSearch = (text) => {
    const filtered = listOfRestorent.filter((data) =>
      data.info.name.toLowerCase().includes(text.trim().toLowerCase()) || 
      data.info.cuisines.map((cuisine) => cuisine.toLowerCase()).includes(text.trim().toLowerCase())
    );
    setFilteredRestorent(filtered);
  };

  return listOfRestorent.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="BodyHeader">
        <div className="InputSearchCantainer">
          <input
            type="text"
            placeholder="Search for restaurant and food"
            className="headerLeftInput"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);
              handleSearch(value);  // Real-time filtering as user types
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              const filteredRestorent = listOfRestorent.filter((data) =>
                (data.info.name.toLowerCase().includes(searchText.trim().toLowerCase())) || 
                (data.info.cuisines.map((cuisine) => cuisine.toLowerCase()).includes(searchText.trim().toLowerCase())));
              setFilteredRestorent(filteredRestorent);  // Manual search on button click
            }}
          >
            Search
          </button>
        </div>
        <div className="filterBtns">
          <button
            className="AllRestorent"
            onClick={() => {
              setFilteredRestorent(
                listOfRestorent.filter((data) => data.info.avgRating >= 1)
              );
            }}
          >
            All
          </button>
          <button
            className="topRestorent"
            onClick={() => {
              setFilteredRestorent(
                filteredRestorent.filter((data) => data.info.avgRating >= 4)
              );
            }}
          >
            Top Rated Restorent
          </button>
        </div>
      </div>
      <div className="card-caintainer">
        {filteredRestorent?.map((restaurant) => (
          <Card data={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
}
