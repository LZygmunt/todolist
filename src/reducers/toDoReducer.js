import {
  ADD_LIST,
  ADD_TODO,
  REMOVE_LIST,
  REMOVE_TODO, TOGGLE_COMPLETE_TODO,
} from 'utils/constans';
import { v4 as uuid } from 'uuid';

export const toDoReducer = ( state, action ) => {
  const {
    type,
    payload: {
      listID,
      listText,
      toDoID,
      toDoText,
      toDoList,
    },
  } = action;
  let id, newState;

  switch ( type ) {
    case ADD_TODO: // action: {{ listID, toDoText }, type }
      id = uuid();
      newState = { ...state };

      newState[ listID ].toDoList[ id ] = {
        completed: false,
        id,
        text: toDoText,
      };

      return newState;
    case TOGGLE_COMPLETE_TODO: // action: {{ listID, toDoID }, type }
      newState = { ...state };
      newState[ listID ].toDoList[ toDoID ].completed = !newState[ listID ].toDoList[ toDoID ].completed;

      return newState;
    case REMOVE_TODO: // action: {{ listID, toDoID }, type }
      newState = { ...state };
      delete newState[ listID ].toDoList[ toDoID ];

      return newState;
    case ADD_LIST: // action: {{ listID, listText, toDoList }, type }
      return {
        ...state,
        [ listID ]: {
          id: listID,
          text: listText,
          toDoList,
        },
      };
    case REMOVE_LIST: // action: {{ listID }, type }
      newState = { ...state };
      delete newState[ listID ];

      return newState;
    default:
      return state;
  }
};
