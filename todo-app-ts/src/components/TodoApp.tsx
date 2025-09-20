import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import type { Todo, FilterType } from './types';
declare module '*.css';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<FilterType>('all');

    const addTodo = (text: string) => {
        if (text.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                text: text.trim(),
                completed: false
            };
            setTodos([...todos, newTodo]);
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    return (
        <div className="todo-app">
            <h1> LISTA DE TAREAS</h1>
            <AddTodo onAddTodo={addTodo} />
            <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
            <TodoList
                todos={filteredTodos}
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
            />
        </div>
    );
};

export default TodoApp;