const TodoFilter = ({ currentFilter, onFilterChange }) => {
    const filters = [
        {key: 'all', label: 'Todas'},
        {key: 'active', label: 'Pendientes'},
        {key: 'completed', label: 'Completadas'}
    ];

    return (
        <div className="todo-filter">
            {filters.map(filter => (
                <button
                    key={filter.key}
                    className={currentFilter === filter.key ? 'active' : ''}
                    onClick={() => onFilterChange(filter.key)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default TodoFilter;