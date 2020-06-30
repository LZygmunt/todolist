import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ADD_TODO } from 'utils/constans';

const AddToDo = ({
  listID, handleKey, dispatch,
}) => {
  const [ text, setText ] = React.useState( '' );

  const addToDo = useCallback(() => {
    if ( text === '' ) { return; }

    dispatch({
      type: ADD_TODO,
      payload: {
        listID,
        text,
      },
    });
    setText( '' );
  }, [
    dispatch,
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
};

AddToDo.defaultProps = { handleKey: () => {} };

export default AddToDo;
