import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import ToDoList from '../component/toDo/ToDoList';
import Menu from '../component/menu/Menu';
import ListOfLists from '../component/toDo/ListOfLists';
// import ToDoContextProvider from '../contexts/ToDoContext';

import './app.scss';

const App = () =>
// const [ isLoading, setIsLoading ] = React.useState( true );

/*
 * React.useEffect( () => {
 *     setTimeout( () => setIsLoading( false ), 1500 );
 * }, [ isLoading ]);
 */

  (
    <BrowserRouter>
      {/* <ToDoContextProvider>*/}
      <Menu />
      <Switch>
        <Route exact path="/" component={ ListOfLists } />
        <Route exact path="/list/:id" component={ ToDoList } />
      </Switch>
      {/* </ToDoContextProvider>*/}
    </BrowserRouter>
  );

export default App;
