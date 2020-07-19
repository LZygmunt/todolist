import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import ListName from 'component/listName/ListName';
import ToDoList from 'component/toDo/ToDoList';
import Menu from 'component/menu/Menu';
import ListOfLists from 'component/toDo/ListOfLists';
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
