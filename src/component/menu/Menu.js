import React, { useCallback } from 'react';
import DotsIcon from '../misc/Icons/DotsIcon';
import LeftArrowIcon from '../misc/Icons/LeftArrowIcon';
import PlusIcon from '../misc/Icons/PlusIcon';
import RightArrowIcon from '../misc/Icons/RightArrowIcon';
import MenuItem from './MenuItem';
import {
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';

import './scss/menu.scss';

const Menu = () => {
  const location = useLocation();
  const history = useHistory();
  const nextList = 'l';
  const prevList = 's';

  const click = useCallback(( evt ) => {
    const { name } = evt.currentTarget.dataset;

    switch ( name ) {
      case 'add':
        history.push( '/list/l ' );
        break;
      case 'next':
        history.push( `/list/${ nextList }` );
        break;
      case 'prev':
        history.push( `/list/${ prevList }` );
        break;
      case 'lists':
        history.push( '/' );
        break;
      default:
        console.log( name );
        break;
    }
  }, [ history ]);

  return (
    <div id="menu">
      <MenuItem
        text="Add list"
        clickFn={ click }
        classes={[ 'right', 'top' ]}
        name="add"
      >
        <PlusIcon />
      </MenuItem>
      { location.pathname !== '/' && (
        <>
          <MenuItem
            text="Your Lists"
            clickFn={ click }
            classes={[ 'left', 'top' ]}
            name="lists"
          >
            <DotsIcon />
          </MenuItem>
          <MenuItem
            text="Lista#1"
            clickFn={ click }
            classes={[ 'left', 'bottom' ]}
            name="prev"
          >
            <LeftArrowIcon />
          </MenuItem>
          <MenuItem
            text="Lista#3"
            clickFn={ click }
            classes={[ 'right', 'bottom' ]}
            name="next"
          >
            <RightArrowIcon />
          </MenuItem>
        </>
      ) }
    </div>
  );
};

export default Menu;
