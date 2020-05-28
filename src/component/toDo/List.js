import React from 'react';
import Item from "./Item";

const List = ({
  list,
  clickFn,
  deleteItem
}) => {
  const sort = () => {
    console.log("sortuje");
  };

  // const deleteItem = id => {
    // return list.filter( toDo => toDo.id !== id );
  // }

  const mappedList = list.map( item => <Item
    key={ item.id }
    item={ item }
    clickFn={ clickFn }
    deleteItem={ deleteItem }
    sort={ sort }
  />);

  return (
    <div className="list">
      { mappedList }
    </div>
  );
};

export default List;
