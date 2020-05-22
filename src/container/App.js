import React from 'react';
import ToDoList from "../component/toDo/ToDoList";
import Menu from "../component/menu/Menu";

import './app.scss';

const App = () => {
    const [ isLoading, setIsLoading ] = React.useState( true );

    React.useEffect( () => {
        setTimeout( () => setIsLoading( false ), 1500 );
    }, [ isLoading ]);

    return (
      <>
          {/*{ isLoading*/}
          {/*  ? <h2>Page is loading...</h2>*/}
          {/*  : <ToDoList />*/}
          {/*}*/}
          <Menu />
        <ToDoList />
      </>
    );
};

export default App;
