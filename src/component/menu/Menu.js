import React from 'react';

import './scss/menu.scss';
import MenuItem from "./MenuItem";

const click = () => {
  console.log("WIIIII!!!! Logujem");
}

const Menu = () => {
  return (
    <div id="menu">
      <MenuItem
        text="Menu"
        clickFn={ click }
        className="left"
      />
      <MenuItem
        text="Dodaj listę"
        clickFn={ click }
        className="right"
      />
      <MenuItem
        text="Lista#1"
        clickFn={ click }
        className="left">
        <svg className="arrow" viewBox="0 0 100 100">
          <polygon points="0,50 50,0 50,25 25,50 50,75 50,100"/>
        </svg>
      </MenuItem>
      <MenuItem
        text="Lista#3"
        clickFn={ click }
        className="right">
        <svg className="arrow" viewBox="0 0 100 100">
          <polygon points="100,50 50,0 50,25 75,50 50,75 50,100"/>
        </svg>
      </MenuItem>
    </div>
  );
};

export default Menu;
