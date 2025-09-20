import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (
        <div className="todo-list">
            {todo.length === 0 ? (
                <p>No hay tareas por mostrar</p>
            ) : (
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;