import _filter from 'lodash/filter';
import _findIndex from 'lodash/findIndex';
import _keys from 'lodash/keys';
import { v4 as uuid } from 'uuid';
import constants from 'utils/constants';
import mockToDos from 'utils/toDosData';

const {
  actions: {
    ADD_LIST,
    ADD_TODO,
    SET_NAV,
    REMOVE_LIST,
    REMOVE_TODO,
    TOGGLE_COMPLETE_TODO,
    CHANGE_LIST_NAME_EXECUTE,
    CHANGE_LIST_NAME_INIT,
    LOAD_DEFAULT,
  },
  bannedNames: BANNED_NAMES,
} = constants;

const getListInfo = ( state, listID ) => state[ listID ];

const getNextAndPrev = ( state, listID ) => {
  const keys = _filter( _keys( state ), ( key ) => !BANNED_NAMES.includes( key ));

  switch ( keys.length ) {
    case 0: {
      return {};
    }

    case 1: {
      return { curr: getListInfo( state, listID ) };
    }

    case 2: {
      return {
        curr: getListInfo( state, listID ),
        prev: getListInfo( state, keys[ 0 ]),
        next: getListInfo( state, keys[ 1 ]),
      };
    }

    default: {
      const found = _findIndex( keys, ( key ) => key === listID );

      if ( found <= 0 ) {
        return {
          curr: getListInfo( state, listID ),
          prev: getListInfo( state, keys[ keys.length - 1 ]),
          next: getListInfo( state, keys[ found + 1 ]),
        };
      }

      if ( found === keys.length - 1 || found === -1  ) {
        return {
          curr: getListInfo( state, listID ),
          prev: getListInfo( state, keys[ found - 1 ]),
          next: getListInfo( state, keys[ 0 ]),
        };
      }

      return {
        curr: getListInfo( state, listID ),
        prev: getListInfo( state, keys[ found - 1 ]),
        next: getListInfo( state, keys[ found + 1 ]),
      };
    }
  }
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
    case ADD_TODO: { // action: {{ listID, toDoText }, type }
      id = uuid();
      newState = { ...state };

      newState[ listID ].toDoList[ id ] = {
        completed: false,
        id,
        text,
      };

      return newState;
    }

    case TOGGLE_COMPLETE_TODO: { // action: {{ listID, toDoID }, type }
      newState = { ...state };
      newState[ listID ].toDoList[ toDoID ].completed = !newState[ listID ].toDoList[ toDoID ].completed;

      return newState;
    }

    case REMOVE_TODO: { // action: {{ listID, toDoID }, type }
      newState = { ...state };
      delete newState[ listID ].toDoList[ toDoID ];

      return newState;
    }

    case ADD_LIST: { // action: {{ listID, listText, toDoList }, type }
      return {
        ...state,
        [ listID ]: {
          id: listID,
          text,
          toDoList,
        },
      };
    }

    case REMOVE_LIST: { // action: {{ listID }, type }
      newState = { ...state };
      delete newState[ listID ];

      return newState;
    }

    case SET_NAV: { // action: {{ listID }, type }
      newState = {
        ...state,
        ...getNextAndPrev({ ...state }, listID ),
      };

      return newState;
    }

    case CHANGE_LIST_NAME_INIT: { // action: { type }
      newState = {
        ...state,
        changeNameActive: true,
      };

      return newState;
    }

    case CHANGE_LIST_NAME_EXECUTE: { // action: {{ listID, text }, type }
      newState = {
        ...state,
        [ listID ]: {
          ...state[ listID ],
          text,
        },
        curr: {
          ...state[ listID ],
          text,
        },
        changeNameActive: false,
      };

      return newState;
    }

    case LOAD_DEFAULT: { // action: { type }
      newState = {
        ...state,
        ...mockToDos,
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};
