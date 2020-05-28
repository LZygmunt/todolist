import React from 'react';
import ToDoList from "../component/toDo/ToDoList";
import Menu from "../component/menu/Menu";

import './app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListOfLists from "../component/toDo/ListOfLists";

const App = () => {
    // const [ isLoading, setIsLoading ] = React.useState( true );

    // React.useEffect( () => {
    //     setTimeout( () => setIsLoading( false ), 1500 );
    // }, [ isLoading ]);

    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={ ListOfLists } />
          <Route exact path="/list/:id" component={ ToDoList } />
        </Switch>
      </BrowserRouter>
    );
};

export default App;
