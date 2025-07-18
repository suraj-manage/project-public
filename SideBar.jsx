import React from 'react';

const Sidebar = ({ ads }) => (
  <aside className="sidebar">
    <div className="card ad-banner">
      <a href={ads[0].link} target="_blank" rel="noreferrer">
        <img src={ads[0].img} alt="Ad" />
      </a>
    </div>
  </aside>
);

export default Sidebar;
