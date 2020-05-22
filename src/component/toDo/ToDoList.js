import React from 'react';
import ToDosData from "../ToDosData";
import ToDoItem from "./ToDoItem";

import "./scss/toDo.scss";

const ToDoList = () => {
  const [ toDos, setToDos ] = React.useState([]);
  const [ text, setText ] = React.useState( "" );

  const sort = () => {
    console.log("sortuje");
  };

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
    if ( toDos.length === 0 ) setToDos( ToDosData );
  }, [ toDos  ]);

  const toDosMap = toDos.map( item => <ToDoItem
    key={ item.id }
    item={ item }
    toggleComplete={ toggleComplete }
    deleteToDo={ deleteToDo }
    sort={ sort }
  />);

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
      <div className="list">{ toDosMap }</div>
    </>
  );
};

export default ToDoList;
