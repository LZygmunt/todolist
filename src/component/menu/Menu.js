import React, { useCallback } from 'react';
import {
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { menuNames } from 'config';

import DotsIcon from 'component/misc/Icons/DotsIcon';
import LeftArrowIcon from 'component/misc/Icons/LeftArrowIcon';
import PlusIcon from 'component/misc/Icons/PlusIcon';
import RightArrowIcon from 'component/misc/Icons/RightArrowIcon';
import MenuItem from './MenuItem';

import './scss/menu.scss';

const Menu = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const nextList = 'l';
  const prevList = 's';

  const click = useCallback(( evt ) => {
    const { name } = evt.currentTarget.dataset;

    switch ( name ) {
      case menuNames.ADD:
        history.push( `/list/${ uuid() }`, { isNew: true });
        break;
      case menuNames.NEXT:
        history.push( `/list/${ nextList }` );
        break;
      case menuNames.PREV:
        history.push( `/list/${ prevList }` );
        break;
      case menuNames.LISTS:
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
        name={ menuNames.ADD }
      >
        <PlusIcon />
      </MenuItem>
      { pathname !== '/' && (
        <>
          <MenuItem
            text="Your Lists"
            clickFn={ click }
            classes={[ 'left', 'top' ]}
            name={ menuNames.LISTS }
          >
            <DotsIcon />
          </MenuItem>
          <MenuItem
            text="Lista#1"
            clickFn={ click }
            classes={[ 'left', 'bottom' ]}
            name={ menuNames.PREV }
          >
            <LeftArrowIcon />
          </MenuItem>
          <MenuItem
            text="Lista#3"
            clickFn={ click }
            classes={[ 'right', 'bottom' ]}
            name={ menuNames.NEXT }
          >
            <RightArrowIcon />
          </MenuItem>
        </>
      ) }
    </div>
  );
};

export default Menu;
