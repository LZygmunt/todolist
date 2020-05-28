import React from 'react';
import List from "./List";

const ListOfLists = () => {
  const list = [ {
    text: 'List#1',
    id: 1
  }, {
    text: "List#2",
    id: 2
  }, {
    text: "List#3",
    id: 3
  }, {
    text: "List#4",
    id: 4
  }, {
    text: "List#5",
    id: 5
  }, {
    text: "List#6",
    id: 6
  } ];

  const deleteItem = id => {

  };

  const clickFn = () => {};

  return (
    <>
      <List
        list={ list }
        clickFn={ clickFn }
        deleteItem={ deleteItem }
      />
    </>
  );
};

export default ListOfLists;
