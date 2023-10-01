// src/components/Todo.js

import React, { useState } from 'react';
import TodoList from './TodoList';
import ToDoElementPending from './ToDoElementPending'; // Import the new component

function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Task 1', completed: false, pending: true },
        { id: 2, text: 'Task 2', completed: false, pending: false },
        // ... other initial tasks
    ]);

    const togglePending = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, pending: !todo.pending } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <h2>Pending Tasks</h2>
            <TodoList
                todos={todos.filter((todo) => todo.pending)} // Filter pending tasks
                onDelete={deleteTodo}
                onToggle={togglePending}
                ElementComponent={ToDoElementPending} // Use the new component
            />
        </div>
    );
}

export default Todo;
