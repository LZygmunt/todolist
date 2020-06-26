import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({
  toDos, setToDos, handleKey,
}) => {
  const [ text, setText ] = React.useState( '' );

  const addToDo = useCallback(() => {
    console.log( 'tu? -> 1' );
    if ( text === '' ) {
      console.log( 'a może tu? -> 2' );

      return;
    }

    setToDos(( prevToDos ) => [
      ...prevToDos,
      {
        completed: false,
        id: toDos.length,
        text,
      },
    ]);
    setText( '' );
  }, [
    setToDos,
    text,
    toDos.length,
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
  handleKey: PropTypes.func,
  setToDos: PropTypes.func,
  toDos: PropTypes.arrayOf( PropTypes.shape({ id: PropTypes.number })),
};

AddToDo.defaultProps = {
  toDos: [],
  handleKey: () => {},
  setToDos: () => {},
};

export default AddToDo;
