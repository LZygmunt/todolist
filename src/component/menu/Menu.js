import React from 'react';
import MenuItem from "./MenuItem";
import { useLocation } from 'react-router-dom';

import './scss/menu.scss';

const click = () => {
  console.log("WIIIII!!!! Logujem");
}

const Menu = () => {
  const location = useLocation();

  return (
    <div id="menu">
      <MenuItem
        text="Add list"
        clickFn={ click }
        className={[ "right", "top" ]}>
        <svg className="add-list icon" viewBox="-30 0 120 100">
          <polygon points="30,0 60,0 60,30 90,30 90,60 60,60 60,90 30,90 30,60 0,60 0,30 30,30"/>
        </svg>
      </MenuItem>
      { location.pathname !== '/' && <>
        <MenuItem
          text="Your Lists"
          clickFn={ click }
          className={[ "left", "top" ]}>
          <svg className="dots icon" viewBox="0 0 100 100">
            <circle
              cx="20"
              cy="0"
              r="20"
            />
            <circle
              cx="20"
              cy="60"
              r="20"
            />
            <circle
              cx="20"
              cy="120"
              r="20"
            />
          </svg>
        </MenuItem>
        <MenuItem
          text="Lista#1"
          clickFn={ click }
          className={[ "left", "bottom" ]}>
          <svg className="arrow icon" viewBox="0 0 100 100">
            <polygon points="0,50 50,0 50,25 25,50 50,75 50,100"/>
          </svg>
        </MenuItem>
        <MenuItem
          text="Lista#3"
          clickFn={ click }
          className={[ "right", "bottom" ]}>
          <svg className="arrow icon" viewBox="0 0 100 100">
            <polygon points="100,50 50,0 50,25 75,50 50,75 50,100"/>
          </svg>
        </MenuItem>
      </> }
    </div>
  );
};

export default Menu;
