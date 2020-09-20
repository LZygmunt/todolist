import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import constants from 'utils/constants';
import { ToDoContext } from 'contexts/ToDoContext';

import DotsIcon from 'components/misc/Icons/DotsIcon';
import LeftArrowIcon from 'components/misc/Icons/LeftArrowIcon';
import PlusIcon from 'components/misc/Icons/PlusIcon';
import RightArrowIcon from 'components/misc/Icons/RightArrowIcon';
import ImportIcon from 'components/misc/Icons/ImportIcon';
import Tooltip from 'components/tooltip/Tooltip';
import MenuItem from './MenuItem';

import './scss/menu.scss';

const {
  menu: { names: menuNames, texts: menuTexts },
  actions: { SET_NAV, LOAD_DEFAULT },
  globalIds: { TOOLTIP },
} = constants;

const isSame = ( firstList, secondList ) => firstList?.id === secondList?.id;

const Menu = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { toDos, dispatch } = useContext( ToDoContext );
  const [ nav, setNav ] = useState({
    next: '',
    prev: '',
  });

  useEffect(() => {
    console.log( toDos?.next && toDos?.prev );
    if ( toDos?.next && toDos?.prev ) {
      setNav({
        next: toDos.next,
        prev: toDos.prev,
      });
    } else {
      setNav({
        next: '',
        prev: '',
      });
    }
  }, [ toDos ]);

  useEffect(() => {
    Tooltip.rebuild();
  });

  const click = useCallback(( evt ) => {
    Tooltip.hide();
    const { name } = evt.currentTarget.dataset;
    let id;

    switch ( name ) {
      case menuNames.ADD: {
        id = uuid();
        history.push( `/list/${ id }`, { isNew: true });
        dispatch({
          type: SET_NAV,
          payload: { listID: id },
        });
        break;
      }

      case menuNames.NEXT: {
        history.push( `/list/${ nav.next.id }` );
        dispatch({
          type: SET_NAV,
          payload: { listID: nav.next.id },
        });
        break;
      }

      case menuNames.PREV: {
        history.push( `/list/${ nav.prev.id }` );
        dispatch({
          type: SET_NAV,
          payload: { listID: nav.prev.id },
        });
        break;
      }

      case menuNames.LISTS: {
        history.push( '/' );
        dispatch({
          type: SET_NAV,
          payload: {},
        });
        break;
      }

      case menuNames.LOAD_DEFAULT: {
        dispatch({
          type: LOAD_DEFAULT,
          payload: {},
        });
        break;
      }

      default: {
        break;
      }
    }
  }, [
    dispatch,
    history,
    nav,
  ]);

  return (
    <>
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
              classes={ classNames( 'left', { disable: isSame( toDos.prev, toDos.curr ) })}
              name={ menuNames.PREV }
            >
              <LeftArrowIcon />
            </MenuItem>
            <MenuItem
              text={ nav.next.text }
              clickFn={ click }
              classes={ classNames( 'right', { disable: isSame( toDos.next, toDos.curr ) })}
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
        ) }
      </div>
      <Tooltip
        id={ TOOLTIP }
        offset={{ top: 25 }}
        delayShow={ 500 }
      />
    </>
  );
};

export default Menu;
