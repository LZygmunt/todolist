import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ToDoContext } from 'contexts/ToDoContext';
import { REMOVE_TODO, TOGGLE_COMPLETE_TODO } from 'utils/constans';

import AddToDo from './AddToDo';
import List from './List';

import './scss/toDo.scss';

const ToDoList = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { toDos, dispatch } = useContext( ToDoContext );
  const [ list, setList ] = useState([]);

  useEffect(() => {
    if ( state?.isNew ) {
      setList([]);
    } else {
      setList( toDos[ id ].toDoList );
    }
  }, [
    id,
    state,
    toDos,
  ]);

  const toggleComplete = useCallback(( toDoID ) => {
    dispatch({
      type: TOGGLE_COMPLETE_TODO,
      payload: {
        toDoID,
        listID: id,
      },
    });
  }, [ dispatch, id ]);

  const deleteToDo = ( toDoID ) => {
    dispatch({
      type: REMOVE_TODO,
      payload: {
        toDoID,
        listID: id,
      },
    });
  };

  /*
   * React.useEffect( () => {
   *   if ( !fetched ) {
   *     setToDos( ToDosData );
   *     setFetch( true );
   *   }
   * }, [ toDos, fetched ]);
   */

  return (
    <List
      list={ list }
      clickFn={ toggleComplete }
      deleteItem={ deleteToDo }
    >
      <AddToDo listID={ id } dispatch={ dispatch } />
    </List>
  );
};

export default ToDoList;
