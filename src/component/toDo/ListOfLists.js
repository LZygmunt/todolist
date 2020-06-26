import React from 'react';

import List from './List';

const clickFn = () => {};

const deleteItem = ( id ) => {
  console.log( id );
};

const ListOfLists = () => {
  const [ list, setList ] = React.useState([]);

  return (
    <List
      list={ list }
      clickFn={ clickFn }
      deleteItem={ deleteItem }
    />
  );
};

export default ListOfLists;
