import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import ListName from 'components/listName/ListName';
import ToDoList from 'components/toDo/ToDoList';
import Menu from 'components/menu/Menu';
import ListOfLists from 'components/toDo/ListOfLists';
import ToDoContextProvider from 'contexts/ToDoContext';

import './app.scss';

const App = () => (
  <BrowserRouter>
    <ToDoContextProvider>
      <Menu />
      <Switch>
        <Route exact path="/" component={ ListOfLists } />
        <Route exact path="/list/:id" component={ ToDoList } />
      </Switch>
      <ListName />
    </ToDoContextProvider>
  </BrowserRouter>
);

export default App;
