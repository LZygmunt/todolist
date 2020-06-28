import {
  ADD_LIST,
  ADD_TODO,
  REMOVE_LIST,
  REMOVE_TODO,
} from 'utils/constans';
import { v4 as uuid } from 'uuid';

export const toDoReducer = ( state, action ) => {
  let id;

  switch ( action.type ) {
    case ADD_TODO: // action: { listID, toDoText, type } ŹLE!!!!
      id = state.findIndex(( list ) => list.id === action.listID );
      state[ id ].toDoList.push({
        completed: false,
        id: uuid(),
        text: action.toDoText,
      });

      return state;
    case REMOVE_TODO: // action: { listID, toDoID, type }
      return [ ...state ];
    case ADD_LIST: // action: { listText, toDoList, type }
      state.push({
        id: uuid(),
        text: action.listText,
        toDoList: action.toDoList,
      });

      return state;
    case REMOVE_LIST: // action: { listID, type }
      return state.filter(( list ) => list.id !== action.listID );
    default:
      return state;
  }
};
