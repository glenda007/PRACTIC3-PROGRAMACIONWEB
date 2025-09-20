import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
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
    );
};

export default TodoList;