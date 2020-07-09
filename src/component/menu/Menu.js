import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { menuNames } from 'config';
import { ToDoContext } from 'contexts/ToDoContext';
import { SET_NAV } from 'utils/constans';

import DotsIcon from 'component/misc/Icons/DotsIcon';
import LeftArrowIcon from 'component/misc/Icons/LeftArrowIcon';
import PlusIcon from 'component/misc/Icons/PlusIcon';
import RightArrowIcon from 'component/misc/Icons/RightArrowIcon';
import MenuItem from './MenuItem';

import './scss/menu.scss';

const Menu = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { toDos, dispatch } = useContext( ToDoContext );
  const [ nav, setNav ] = useState({
    next: '',
    prev: '',
  });

  useEffect(() => {
    if ( toDos?.next && toDos?.prev ) {
      setNav({
        next: {
          id: toDos.next,
          text: toDos[ toDos.next ].text,
        },
        prev: {
          id: toDos.prev,
          text: toDos[ toDos.prev ].text,
        },
      });
    }
  }, [ toDos ]);

  const click = useCallback(( evt ) => {
    const { name } = evt.currentTarget.dataset;
    let id;

    switch ( name ) {
      case menuNames.ADD:
        id = uuid();
        history.push( `/list/${ id }`, { isNew: true });
        dispatch({
          type: SET_NAV,
          payload: { listID: id },
        });
        dispatch({
          type: '',
          payload: {},
        });
        break;
      case menuNames.NEXT:
        history.push( `/list/${ nav.next.id }` );
        dispatch({
          type: SET_NAV,
          payload: { listID: nav.next.id },
        });
        break;
      case menuNames.PREV:
        history.push( `/list/${ nav.prev.id }` );
        dispatch({
          type: SET_NAV,
          payload: { listID: nav.prev.id },
        });
        break;
      case menuNames.LISTS:
        history.push( '/' );
        break;
      default:
        console.log( name );
        break;
    }
  }, [
    dispatch,
    history,
    nav,
  ]);

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
            text={ nav.prev.text }
            clickFn={ click }
            classes={[ 'left', 'bottom' ]}
            name={ menuNames.PREV }
          >
            <LeftArrowIcon />
          </MenuItem>
          <MenuItem
            text={ nav.next.text }
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
