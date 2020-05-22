import React from 'react';

import './scss/menu.scss';
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div id="menu">
      <MenuItem text={ 'Menu' }/>
    </div>
  );
};

export default Menu;
