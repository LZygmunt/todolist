import React from 'react';

import './scss/hamburger.scss';

const Hamburger = ({ clickFn }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      width="20"
      height="15"
      className="hamburger"
      onClick={ clickFn }
    >
      <rect width="100" height="10"/>
      <rect
        y="30"
        width="100"
        height="10"
      />
      <rect
        y="60"
        width="100"
        height="10"
      />
    </svg>
  );
};

export default Hamburger;
