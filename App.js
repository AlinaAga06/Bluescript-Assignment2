import React, { useState } from "react";
import "./MarvelText.css";

function MarvelText() {
  const [activeTab, setActiveTab] = useState("characters"); // Default active tab is "Characters"
  const [orderBy, setOrderBy] = useState("name"); // Default order is "Name"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOrderByChange = (value) => {
    setOrderBy(value);
  };

  return (
    <div className="marvel-container">
      <h1 className="header">MARVEL EXPLORER</h1>
      <div className="tabs-container">
        <div className="tab-row">
          <button
            className={`tab-button ${
              activeTab === "characters" ? "active" : ""
            }`}
            onClick={() => handleTabClick("characters")}
          >
            Characters
          </button>
          <div className="tab-spacer"></div>
          <button
            className={`tab-button ${activeTab === "comics" ? "active" : ""}`}
            onClick={() => handleTabClick("comics")}
          >
            Comics
          </button>
        </div>
        <div className="tab-row">
          <button
            className={`tab-button ${activeTab === "search" ? "active" : ""}`}
            onClick={() => handleTabClick("search")}
          >
            🔍Search
          </button>
        </div>
      </div>
      <div className="sidebar">
        <h2>Order By</h2>
        <div className="order-radio">
          <label>
            <input
              type="radio"
              name="orderBy"
              value="name"
              checked={orderBy === "name"}
              onChange={() => handleOrderByChange("name")}
            />
            Name
          </label>
        </div>
        <div className="order-radio">
          <label>
            <input
              type="radio"
              name="orderBy"
              value="modified"
              checked={orderBy === "modified"}
              onChange={() => handleOrderByChange("modified")}
            />
            Modified
          </label>
        </div>
      </div>
      <div className="content">
        {activeTab === "characters" && (
          <div>
            <h2>Characters</h2>
            {/* Add  characters content  */}
          </div>
        )}
        {activeTab === "comics" && (
          <div>
            <h2>Comics</h2>
            {/* Add  comics content  */}
          </div>
        )}
        {activeTab === "search" && (
          <div>
            <h2>Search</h2>
            {/* Add  search content  */}
          </div>
        )}
      </div>
    </div>
  );
}

export default MarvelText;
