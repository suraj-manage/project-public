import React from 'react';

const ButtonGroup = ({ fetchWeather, fetchWiki, fetchAlerts, fetchFamousSites }) => (
  <div className="button-group">
    <button className="button" onClick={fetchWeather}>Weather</button>
    <button className="button" onClick={fetchWiki}>Info</button>
    <button className="button" onClick={fetchAlerts}>News</button>
    <button className="button" onClick={fetchFamousSites}>Places</button>
  </div>
);

export default ButtonGroup;
