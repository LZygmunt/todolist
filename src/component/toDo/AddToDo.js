import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { ADD_LIST, ADD_TODO } from 'utils/constans';

const AddToDo = ({
  listID,
  handleKey,
  dispatch,
  isNew,
}) => {
  const [ text, setText ] = React.useState( '' );

  const addToDo = useCallback(() => {
    if ( text === '' ) { return; }

    if ( isNew ) {
      const id = uuid();

      dispatch({
        type: ADD_LIST,
        payload: {
          listID,
          text: 'list',
          toDoList: {
            [ id ]: {
              completed: false,
              id,
              text,
            },
          },
        },
      });
    } else {
      dispatch({
        type: ADD_TODO,
        payload: {
          listID,
          text,
        },
      });
    }

    setText( '' );
  }, [
    dispatch,
    isNew,
    listID,
    text,
  ]);

  const changeInput = ( evt ) => setText( evt.target.value );

  return (
    <div id="add" className="todo-item">
      <i
        className="add"
        onClick={ addToDo }
        onKeyPress={ handleKey }
        role="button"
        tabIndex="0"
      >
        +
      </i>
      <input
        type="text"
        name="text"
        placeholder="Type ToDo..."
        aria-placeholder="Type ToDo..."
        value={ text }
        onChange={ changeInput }
      />
    </div>
  );
};

AddToDo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listID: PropTypes.string.isRequired,
  handleKey: PropTypes.func,
  isNew: PropTypes.bool,
};

AddToDo.defaultProps = {
  handleKey: () => {},
  isNew: false,
};

export default AddToDo;
