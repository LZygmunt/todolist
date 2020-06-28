import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ToDoContext } from 'contexts/ToDoContext';

import AddToDo from './AddToDo';
import List from './List';

import './scss/toDo.scss';

const ToDoList = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { toDos } = useContext( ToDoContext );
  const [ list, setList ] = useState([]);

  console.log( state );

  useEffect(() => {
    if ( state?.isNew ) {
      setList([]);
    } else {
      setList( toDos.find(( list ) => +list.id === +id ).toDoList );
    }
  }, [ id, toDos ]);

  const toggleComplete = ( id ) => {
    /*
     * setToDos( prevState =>
     *   prevState.map( todo => {
     *     if ( todo.id === id ) todo.completed = !todo.completed;
     *     return todo;
     *   }));
     */
    console.log( 'toggle' );
  };

  const deleteToDo = ( id ) => {
    // setToDos( prevToDos => prevToDos.filter( toDo => toDo.id !== id ));
    console.log( 'remove' );
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
      <AddToDo toDos={[]} setToDos={() => {}} />
    </List>
  );
};

export default ToDoList;
