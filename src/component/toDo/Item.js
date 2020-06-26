import React from 'react';
import PropTypes from 'prop-types';

import Hamburger from '../misc/Icons/Hamburger';

const Item = ({
  item,
  clickFn,
  deleteItem,
  sort,
}) => {
  const {
    id,
    completed,
    text,
  } = item;

  const removeFn = ( evt ) => {
    evt.stopPropagation();
    deleteItem( id );
  };

  return (
    <div
      className="todo-item non-selected"
      onClick={() => clickFn( id )}
      onKeyPress={() => {}}
      role="button"
      tabIndex={ 0 }
    >
      <Hamburger clickFn={ sort } />
      <p className={ completed ? 'checked' : undefined }>
        { text }
      </p>
      <i
        className="remove"
        onClick={ removeFn }
        onKeyPress={() => {}}
        role="button"
        tabIndex={ 0 }
      >
        x
      </i>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool,
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  clickFn: PropTypes.func,
  deleteItem: PropTypes.func,
  sort: PropTypes.func,
};

Item.defaultProps = {
  clickFn: () => {},
  deleteItem: () => {},
  sort: () => {},
};

export default Item;
