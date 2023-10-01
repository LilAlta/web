import React from 'react';

function TodoItem({ todo, isResolved, toggleResolve }) {
    return (
        <li>
            <span style={{ textDecoration: isResolved ? 'line-through' : 'none' }}>{todo}</span>
            <button onClick={toggleResolve}>{isResolved ? 'Unresolve' : 'Resolve'}</button>
        </li>
    );
}

export default TodoItem;