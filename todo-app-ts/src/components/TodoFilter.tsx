import React from 'react';
import type { FilterType } from './types';

interface TodoFilterProps {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({
    currentFilter,
    onFilterChange
}) => {
    const filters: {key: FilterType, label: string }[] = [
        { key: 'all', label: 'Todas' },
        { key: 'active', label: 'Pendientes' },
        { key: 'completed', label: 'Completadas' }
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