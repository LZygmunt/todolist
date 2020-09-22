import { menuItemFontSize, menuItemMaxWidth } from '../assets/scss/_variables.scss';

export default{
  baseUrl: process.env.REACT_APP_BASE_URL,
  listUrl: `${ process.env.REACT_APP_BASE_URL }/list`,
  actions: {
    ADD_LIST: 'ADD_LIST',
    ADD_TODO: 'ADD_TODO',
    CHANGE_LIST_NAME_EXECUTE: 'CHANGE_LIST_NAME_EXECUTE',
    CHANGE_LIST_NAME_INIT: 'CHANGE_LIST_NAME_INIT',
    LOAD_DEFAULT: 'LOAD_DEFAULT',
    REMOVE_LIST: 'REMOVE_LIST',
    REMOVE_TODO: 'REMOVE_TODO',
    SET_NAV: 'SET_NAV',
    TOGGLE_COMPLETE_TODO: 'TOGGLE_COMPLETE_TODO',
  },
  bannedNames: [
    'next',
    'prev',
    'curr',
    'changeNameActive',
  ],
  menu: {
    names: {
      ADD: 'add',
      NEXT: 'next',
      PREV: 'prev',
      LISTS: 'lists',
      LOAD_DEFAULT: 'loadTestValue',
    },
    texts: {
      ADD: 'Add list',
      LISTS: 'Your Lists',
      LOAD_DEFAULT: 'Import sample data',
    },
    quantities: {
      FONT_SIZE: Number( menuItemFontSize.slice( 0, -2 )),
      MAX_TEXT_WIDTH: Number( menuItemMaxWidth.slice( 0, -2 )), // always smaller by 30px than the item width
    },
  },
  storageKey: 'todos',
  globalIds: { TOOLTIP: 'TOOLTIP' },
};
