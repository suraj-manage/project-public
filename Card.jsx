import React from 'react';

const Card = ({ title, children }) => (
  <div className="card">
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

export default Card;
