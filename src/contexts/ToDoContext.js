import React, {
  createContext, useEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { storageKey } from 'utils/constants';

import { toDoReducer } from 'reducers/toDoReducer';

const ToDoContextProvider = ({ children }) => {
  const [ toDos, dispatch ] = useReducer(
    toDoReducer,
    {},
    () => {
      const localData = localStorage.getItem( storageKey );

      return localData ? JSON.parse( localData ) : {};
    },
  );

  useEffect(() => {
    localStorage.setItem( storageKey, JSON.stringify( toDos ));
  }, [ toDos ]);

  return (
    <ToDoContext.Provider value={{
      toDos,
      dispatch,
    }}
    >
      { children }
    </ToDoContext.Provider>
  );
};

ToDoContextProvider.propTypes = { children: PropTypes.node };

ToDoContextProvider.defaultProps = { children: null };

export const ToDoContext = createContext();
export default ToDoContextProvider;
