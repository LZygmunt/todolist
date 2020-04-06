import React, {Component} from 'react';

import ToDoItem from "./component/ToDoItem";
import ToDosData from "./component/ToDosData"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            todos: ToDosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateState = prevState.todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            });
            return {todos: updateState};
        });
    }

    componentDidMount() {
        setTimeout(() =>
            this.setState({
                isLoading: false
            }), 1500);
    }

    render() {
        const ToDoComponent = this.state.todos.map(item =>
            <ToDoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />);
        return (
            <div className="todo-list">
                {this.state.isLoading ?
                    <h2>Page is loading...</h2> :
                    ToDoComponent
                }
            </div>
        );
    }
}

export default App;
