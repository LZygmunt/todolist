import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ToDoContext } from 'contexts/ToDoContext';
import { REMOVE_LIST } from 'utils/constans';

import List from './List';

const ListOfLists = () => {
  const { toDos, dispatch } = useContext( ToDoContext );
  const history = useHistory();

  const clickFn = useCallback(( listID ) => {
    history.push( `/list/${ listID }` );
  }, [ history ]);

  const deleteItem = useCallback(( listID ) => {
    dispatch({
      type: REMOVE_LIST,
      payload: { listID },
    });
  }, [ dispatch ]);

  return (
    <List
      list={ toDos }
      clickFn={ clickFn }
      deleteItem={ deleteItem }
    />
  );
};

export default ListOfLists;
