import React from "react";
import Hamburger from "../misc/Hamburger";

const Item = ({
  item,
  clickFn,
  deleteItem,
  sort
}) => {
  let {
    id,
    completed,
    text
  } = item;

  const removeFn = ( evt ) => {
    evt.stopPropagation();
    deleteItem( id );
  }

  return (
    <div className="todo-item non-selected" onClick={() => clickFn( id )}>
      <Hamburger clickFn={ sort } />
      <p className={ completed ? 'checked' : undefined }>{ text }</p>
      <i className="remove" onClick={ removeFn }>x</i>
    </div>
  );
}

export default Item;
