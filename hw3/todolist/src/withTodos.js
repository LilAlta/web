import React, { useState, useEffect } from 'react';

const withTodos = (WrappedComponent) => {
    return (props) => {
        const [todos, setTodos] = useState([]);
        const [newTodo, setNewTodo] = useState('');

        const addTodo = (newTodoText) => {
            setTodos([...todos, { text: newTodoText, isResolved: false }]);
        };

        const toggleResolve = (index) => {
            const updatedTodos = [...todos];
            updatedTodos[index].isResolved = !updatedTodos[index].isResolved;
            setTodos(updatedTodos);
        };

        useEffect(() => {
            console.log('Component is mounted');
            return () => {
                console.log('Component will unmount');
            };
        }, []);

        return (
            <WrappedComponent
                {...props}
                todos={todos}
                addTodo={addTodo}
                toggleResolve={toggleResolve}
                newTodo={newTodo}
                setNewTodo={setNewTodo}
            />
        );
    };
};

export default withTodos;