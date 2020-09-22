import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import constants from 'utils/constants';

const {
  actions: {
    ADD_LIST,
    ADD_TODO,
    CHANGE_LIST_NAME_EXECUTE,
  },
  listUrl,
} = constants;

const AddToDo = ({
  listID,
  // handleKey,
  dispatch,
  isNew,
  changeNameActive,
}) => {
  const [ text, setText ] = useState( '' );
  const history = useHistory();

  const addToDo = useCallback(() => {
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

      history.push( `${ listUrl }/${ listID }` );
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
    history,
  ]);

  const changeListName = useCallback(() => {
    dispatch({
      type: CHANGE_LIST_NAME_EXECUTE,
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

  const onCLick = useCallback(() => changeNameActive ? changeListName() : addToDo(), [
    addToDo,
    changeListName,
    changeNameActive,
  ]);

  const handleKey = useCallback(( evt ) => {
    if ( evt.key === 'Enter' ) {
      onCLick();
    }
  }, [ onCLick ]);

  const changeInput = ( evt ) => setText( evt.target.value );

  const placeholder = changeNameActive ? 'Type List Name...' : 'Type ToDo...';

  return (
    <div id="add" className="todo-item">
      <i
        className="add"
        onClick={ onCLick }
        onKeyPress={ handleKey }
        role="button"
        tabIndex="0"
      >
        +
      </i>
      <input
        type="text"
        name="text"
        placeholder={ placeholder }
        aria-placeholder={ placeholder }
        value={ text }
        onChange={ changeInput }
        onKeyPress={ handleKey }
      />
    </div>
  );
};

AddToDo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listID: PropTypes.string.isRequired,
  // handleKey: PropTypes.func,
  changeNameActive: PropTypes.bool,
  isNew: PropTypes.bool,
};

AddToDo.defaultProps = {
  // handleKey: () => {},
  changeNameActive: false,
  isNew: false,
};

export default AddToDo;
