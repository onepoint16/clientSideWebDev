import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({toDoList, handleToggle,handleClear,clearCompleted }) => {

return (
    <div>
        {toDoList.map((todo) => {
            return (
                <ToDo todo={todo}  handleToggle={handleToggle} />
            )
        })}
        <button style={{margin: '20px'}} onClick={clearCompleted}>ClearCompleted</button>
        <button style={{margin: '20px'}} onClick={handleClear}>Clear All</button>
    </div>
);
};

export default ToDoList;