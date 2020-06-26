import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const List = ({
  list,
  clickFn,
  deleteItem,
}) => {
  const sort = () => {
    console.log( 'sortuje' );
  };

  /*
   * const deleteItem = id => {
   * return list.filter( toDo => toDo.id !== id );
   * }
   */

  const mappedList = list.map(( item ) => (
    <Item
      key={ item.id }
      item={ item }
      clickFn={ clickFn }
      deleteItem={ deleteItem }
      sort={ sort }
    />
  ));

  return (
    <div className="list">
      { mappedList }
    </div>
  );
};

List.propTypes = {
  clickFn: PropTypes.func,
  deleteItem: PropTypes.func,
  list: PropTypes.arrayOf( PropTypes.shape({
    clickFn: PropTypes.func,
    deleteItem: PropTypes.func,
    id: PropTypes.string,
    item: PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.string,
      text: PropTypes.string,
    }),
    sort: PropTypes.func,
  })),
};

List.defaultProps = {
  clickFn: () => {},
  deleteItem: () => {},
  list: [],
};

export default List;
