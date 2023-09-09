import React, { useState } from 'react';
import './MarvelText.css';

function MarvelText() {
  const [activeTab, setActiveTab] = useState('characters'); // Default active tab is "Characters"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="marvel-container">
      <h1 className="header">MARVEL EXPLORER</h1>
      <div className="tabs-container">
        <div className="tab-row">
          <button
            className={`tab-button ${activeTab === 'characters' ? 'active' : ''}`}
            onClick={() => handleTabClick('characters')}
          >
            Characters
          </button>
          <div className="tab-spacer"></div>
          <button
            className={`tab-button ${activeTab === 'comics' ? 'active' : ''}`}
            onClick={() => handleTabClick('comics')}
          >
            Comics
          </button>
        </div>
        <div className="tab-row">
          <button
            className={`tab-button ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => handleTabClick('search')}
          >
            🔍Search
          </button>
        </div>
      </div>
      <div className="content">
        {activeTab === 'characters' && (
          <div>
            <h2>Characters</h2>
            {/* Add your Characters content here */}
          </div>
        )}
        {activeTab === 'comics' && (
          <div>
            <h2>Comics</h2>
            {/* Add your Comics content here */}
          </div>
        )}
        {activeTab === 'search' && (
          <div>
            <h2>Search</h2>
            {/* Add your Search content here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default MarvelText;
