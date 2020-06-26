import React from 'react';
import AddToDo from './AddToDo';
import List from './List';

import './scss/toDo.scss';

const ToDoList = () => {
  // const [ fetched, setFetch ] = React.useState( false );

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
    <>
      <AddToDo toDos={[]} setToDos={() => {}} />
      <List
        list={ [] }
        clickFn={ toggleComplete }
        deleteItem={ deleteToDo }
      />
    </>
  );
};

export default ToDoList;
