import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty';

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
    if ( state?.isNew && _isEmpty( toDos[ id ])) {
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

  return (
    <List
      list={ list }
      clickFn={ toggleComplete }
      deleteItem={ deleteToDo }
    >
      <AddToDo
        listID={ id }
        dispatch={ dispatch }
        isNew={ state?.isNew }
      />
    </List>
  );
};

export default ToDoList;
