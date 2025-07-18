import React from 'react';

const SearchBar = ({ area, setArea }) => (
  <input
    className="searchBox"
    value={area}
    onChange={(e) => setArea(e.target.value)}
    placeholder="Enter city or place"
  />
);

export default SearchBar;
