import React from 'react';
import TodoItem from './ToDoItem';

function ToDoElementPending({ todos, toggleResolve }) {
    const pendingTodos = todos.filter((todo) => !todo.isResolved);

    return (
        <div>
            <h2>Pending Todos</h2>
            <ul>
                {pendingTodos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo.text}
                        isResolved={todo.isResolved}
                        toggleResolve={() => toggleResolve(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoElementPending;