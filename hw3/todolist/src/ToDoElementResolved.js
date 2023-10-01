import React from 'react';
import TodoItem from './ToDoItem';

function ToDoElementResolved({ todos, toggleResolve }) {
    const resolvedTodos = todos.filter((todo) => todo.isResolved);

    return (
        <div>
            <h2>Resolved Todos</h2>
            <ul>
                {resolvedTodos.map((todo, index) => (
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

export default ToDoElementResolved;