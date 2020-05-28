import React from 'react';
import ToDosData from "../ToDosData";
import List from "./List";

import "./scss/toDo.scss";

const ToDoList = () => {
  const [ toDos, setToDos ] = React.useState([]);
  const [ text, setText ] = React.useState( "" );
  const [ fetched, setFetch ] = React.useState( false );

  const toggleComplete = id => {
    setToDos( prevState =>
      prevState.map( todo => {
        if ( todo.id === id ) todo.completed = !todo.completed;
        return todo;
      }));
    console.log("toggle");
  };

  const addToDo = () => {
    if ( text === "" ) return;

    let id = 0;

    for ( const toDo of toDos ) {
      if ( toDo.id > id ) id = +toDo.id;
    }
    id++;

    setToDos( prevToDos => [ ...prevToDos, { id, text, completed: false }]);
    setText( "" );
  }

  const deleteToDo = id => { setToDos( prevToDos => prevToDos.filter( toDo => toDo.id !== id )); }

  React.useEffect( () => {
    if ( !fetched ) {
      setToDos( ToDosData );
      setFetch( true );
    }
  }, [ toDos, fetched ]);

  return (
    <>
      <div id="add" className="todo-item">
        <i className="add" onClick={ addToDo }>+</i>
        <input
          type="text"
          name="text"
          placeholder="Type ToDo..."
          aria-placeholder="Type ToDo..."
          value={ text }
          onChange={ evt => setText( evt.target.value )}
        />
      </div>
      <List
        list={ toDos }
        clickFn={ toggleComplete }
        deleteItem={ deleteToDo }
      />
    </>
  );
};

export default ToDoList;
