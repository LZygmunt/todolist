import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ToDoContext } from 'contexts/ToDoContext';
import { REMOVE_LIST } from 'utils/constans';

import List from './List';

const ListOfLists = () => {
  const { toDos, dispatch } = useContext( ToDoContext );
  const history = useHistory();

  const clickFn = useCallback(( id ) => {
    history.push( `/list/${ id }` );
  }, [ history ]);

  const deleteItem = useCallback(( id ) => {
    dispatch({
      type: REMOVE_LIST,
      listID: id,
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
