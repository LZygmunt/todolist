import React, { Component } from "react";

class ToDoItem extends Component{
    render() {
        let {completed, text} = this.props.item;
        return(
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChange}
                />
                <p className={completed && 'checked'}>{text}</p>
            </div>
        );
    }
}

export default ToDoItem;