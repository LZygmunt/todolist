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
    // console.log( 'sortuje' );
  };

  const mappedList = Object.values( list ).map(( item ) => (
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

const listShape = PropTypes.shape({
  next: PropTypes.string,
  prev: PropTypes.string,
});

List.propTypes = {
  children: PropTypes.node,
  clickFn: PropTypes.func,
  deleteItem: PropTypes.func,
  list: listShape,
};

List.defaultProps = {
  children: null,
  clickFn: () => {},
  deleteItem: () => {},
  list: {},
};

export default List;
