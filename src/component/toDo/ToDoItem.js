import React from "react";
import Hamburger from "../misc/Hamburger";

const ToDoItem = ({ item, toggleComplete, deleteToDo, sort }) => {
  let { id, completed, text } = item;

  return (
    <div className="todo-item non-selected" onClick={() => toggleComplete( id )}>
      <Hamburger clickFn={ sort } />
      <p className={ completed ? 'checked' : undefined }>{ text }</p>
      <i className="remove" onClick={ evt => { evt.stopPropagation(); deleteToDo( id ) }}>x</i>
    </div>
  );
}

export default ToDoItem;
