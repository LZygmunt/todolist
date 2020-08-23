export default{
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
  },
  storageKey: 'todos',
};
