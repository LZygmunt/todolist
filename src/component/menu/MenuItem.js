import React from 'react';

const MenuItem = ({ text, clickFn }) => {
  return (
    <div className="menu-item" onClick={ clickFn }>
      <p>Menu</p>
    </div>
  );
};

export default MenuItem;
