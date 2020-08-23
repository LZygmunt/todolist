import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import _unset from 'lodash/unset';
import _forEach from 'lodash/forEach';

import { ToDoContext } from 'contexts/ToDoContext';
import constants from 'utils/constants';

import List from './List';

const {
  actions: {
    REMOVE_LIST,
    SET_NAV,
  },
  bannedNames,
} = constants;

const removeNav = ( obj ) => {
  const newObj = obj;

  _forEach( bannedNames, ( el ) => _unset( newObj, el ));

  return newObj;
};

const ListOfLists = () => {
  const { toDos, dispatch } = useContext( ToDoContext );
  const history = useHistory();

  const clickFn = useCallback(( listID ) => {
    history.push( `/list/${ listID }` );
    dispatch({
      type: SET_NAV,
      payload: { listID },
    });
  }, [ dispatch, history ]);

  const deleteItem = useCallback(( listID ) => {
    dispatch({
      type: REMOVE_LIST,
      payload: { listID },
    });
  }, [ dispatch ]);

  return (
    <List
      list={ removeNav( toDos ) }
      clickFn={ clickFn }
      deleteItem={ deleteItem }
    />
  );
};

export default ListOfLists;
