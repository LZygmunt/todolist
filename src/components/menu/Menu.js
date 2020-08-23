import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import constants from 'utils/constants';
import { ToDoContext } from 'contexts/ToDoContext';

import DotsIcon from 'components/misc/Icons/DotsIcon';
import LeftArrowIcon from 'components/misc/Icons/LeftArrowIcon';
import PlusIcon from 'components/misc/Icons/PlusIcon';
import RightArrowIcon from 'components/misc/Icons/RightArrowIcon';
import ImportIcon from 'components/misc/Icons/ImportIcon';
import MenuItem from './MenuItem';

import './scss/menu.scss';

const {
  menu: { names: menuNames, texts: menuTexts },
  actions: { SET_NAV, LOAD_DEFAULT },
} = constants;

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
        dispatch({
          type: SET_NAV,
          payload: {},
        });
        break;
      case menuNames.LOAD_DEFAULT:
        dispatch({
          type: LOAD_DEFAULT,
          payload: {},
        });
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
        text={ menuTexts.ADD }
        clickFn={ click }
        classes="left"
        name={ menuNames.ADD }
      >
        <PlusIcon />
      </MenuItem>
      { pathname !== '/' && (
        <>
          <MenuItem
            text={ menuTexts.LISTS }
            clickFn={ click }
            classes="right"
            name={ menuNames.LISTS }
          >
            <DotsIcon />
          </MenuItem>
          <MenuItem
            text={ nav.prev.text }
            clickFn={ click }
            classes="left"
            name={ menuNames.PREV }
          >
            <LeftArrowIcon />
          </MenuItem>
          <MenuItem
            text={ nav.next.text }
            clickFn={ click }
            classes="right"
            name={ menuNames.NEXT }
          >
            <RightArrowIcon />
          </MenuItem>
        </>
      ) }
      { pathname === '/' && (
        <MenuItem
          text={ menuTexts.LOAD_DEFAULT }
          clickFn={ click }
          classes="left"
          name={ menuNames.LOAD_DEFAULT }
        >
          <ImportIcon />
        </MenuItem>
      )}
    </div>
  );
};

export default Menu;
