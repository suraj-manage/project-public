import React from 'react';
import SearchBar from './searchbar';
const Header = ({ area, setArea }) => (
  <header>
    <h1>🌍 LOCAL-GUIDE</h1>
    <SearchBar area={area} setArea={setArea} />
  </header>
);

export default Header;