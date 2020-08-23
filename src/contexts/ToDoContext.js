import React, {
  createContext, useEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import constants from 'utils/constants';

import { toDoReducer } from 'reducers/toDoReducer';

const { storageKey } = constants;

const ToDoContextProvider = ({ children }) => {
  const [ toDos, dispatch ] = useReducer(
    toDoReducer,
    {},
    () => {
      const localData = localStorage.getItem( storageKey );

      return localData ? JSON.parse( localData ) : {};
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
