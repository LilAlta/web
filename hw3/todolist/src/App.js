import React from 'react';
import './App.css';
import ToDoElementResolved from './ToDoElementResolved';
import ToDoElementPending from './ToDoElementPending';
import withTodos from './withTodos';

function App({ todos, addTodo, toggleResolve, newTodo, setNewTodo }) {
    return (
        <div className="App">
            <h1>Todo App</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={() => addTodo(newTodo)}>Add</button>
            <ToDoElementResolved todos={todos} toggleResolve={toggleResolve} />
            <ToDoElementPending todos={todos} toggleResolve={toggleResolve} />
        </div>
    );
}

export default withTodos(App);