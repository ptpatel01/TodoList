import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState();


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()) return;
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
      };

    return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a new todo"/>
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
 };

 export default TodoList;