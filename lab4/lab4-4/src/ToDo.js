import React from 'react'

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div  key={todo.todo} id={todo.todo} className={todo.done==="true" ? "todo strike" : "todo"} onClick={handleClick}>    
                {todo.todo}
        </div>
    );
};

export default ToDo;