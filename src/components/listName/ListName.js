import React, {
  useContext, useCallback, useRef,
} from 'react';
import { ToDoContext } from 'contexts/ToDoContext';
import { CHANGE_LIST_NAME_INIT } from 'utils/constants';

import './scss/listName.scss';

const ListName = () => {
  const { toDos, dispatch } = useContext( ToDoContext );
  const text = toDos[ toDos.curr ]?.text || 'ToDoList';
  const reference = useRef( null );

  const onMouseEnter = useCallback(() => {
    reference.current.classList.add( 'box' );
  }, []);

  const onMouseLeave = useCallback(() => {
    reference.current.classList.remove( 'box' );
  }, []);

  const changeListName = useCallback(() => {
    dispatch({
      type: CHANGE_LIST_NAME_INIT,
      payload: {},
    });
  }, [ dispatch ]);

  return (
    <div
      className="list-name"
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
      onKeyPress={() => {}}
      onClick={ changeListName }
      ref={reference}
      role="button"
      tabIndex={ 0 }
    >
      <p>{ text }</p>
    </div>
  );
};

export default ListName;
