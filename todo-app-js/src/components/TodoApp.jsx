import { useState } from 'react'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import AddTodo from './AddTodo'
import '../App.css'

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text: text.trim(),
                completed: false
            };
            setTodos([...todos, newTodo])
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    return (
        <div className="todo-app">
            <h1>LISTA DE TAREAS</h1>
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