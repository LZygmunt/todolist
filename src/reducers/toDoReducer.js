import {
  ADD_LIST,
  ADD_TODO,
  SET_NAV,
  REMOVE_LIST,
  REMOVE_TODO,
  TOGGLE_COMPLETE_TODO,
  BANNED_NAMES,
  CHANGE_LIST_NAME_EXECUTE,
  CHANGE_LIST_NAME_INIT,
} from 'utils/constants';
import { v4 as uuid } from 'uuid';

const getNextAndPrev = ( obj, id ) => {
  let next, prev;

  const keys = Object.keys( obj ).filter(( el ) => !BANNED_NAMES.includes( el ));
  const found = keys.findIndex(( el ) => el === id );

  const curr = id;

  prev = keys[ found - 1 ];
  next = keys[ found + 1 ];
  if ( found <= 0 ) { prev = keys[ keys.length - 1 ]; }
  if ( found === keys.length - 1 || found === -1 ) { [ next ] = keys; }

  return {
    next,
    prev,
    curr,
  };
};

export const toDoReducer = ( state, action ) => {
  const {
    type,
    payload: {
      listID,
      text,
      toDoID,
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
        text,
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
          text,
          toDoList,
        },
      };
    case REMOVE_LIST: // action: {{ listID }, type }
      newState = { ...state };
      delete newState[ listID ];

      return newState;
    case SET_NAV: // action: {{ listID }, type }
      newState = {
        ...state,
        ...getNextAndPrev({ ...state }, listID ),
      };

      return newState;
    case CHANGE_LIST_NAME_INIT: // action: { type }
      newState = {
        ...state,
        changeNameActive: true,
      };

      return newState;
    case CHANGE_LIST_NAME_EXECUTE: // action: {{ listID, text }, type }
      newState = {
        ...state,
        [ listID ]: {
          ...state[ listID ],
          text,
        },
        changeNameActive: false,
      };

      return newState;
    default:
      return state;
  }
};
