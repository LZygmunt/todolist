import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const List = ({
  list,
  clickFn,
  deleteItem,
  children,
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
      { children }
      { mappedList }
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node,
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
  children: null,
  clickFn: () => {},
  deleteItem: () => {},
  list: [],
};

export default List;
