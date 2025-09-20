import React from 'react';
import type { Todo } from './types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    onToggleTodo,
    onDeleteTodo
}) => {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p>No hay tareas por mostrar</p>
            ) : (
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggleTodo}
                        onDelete={onDeleteTodo}
                    />
                ))
            )}
        </div>
    )
}

export default TodoList;