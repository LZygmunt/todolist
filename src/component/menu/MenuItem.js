import React from 'react';

const MenuItem = ({ text, clickFn, className, children }) => {
  return (
    <div
      className={ `menu-item box ${ className }` }
      onClick={ clickFn }
    >
      <p>{ text }</p>
      { children }
    </div>
  );
};

export default MenuItem;
