import React, { useState } from 'react';

interface AddTodoProps {
    onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setInputValue(e.target.value)
                }
                placeholder="Agregar una nueva tarea..."
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddTodo;