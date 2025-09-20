import { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue)
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Agregar una nueva tarea..."
            />
            <button
                type="submit">
                    Agregar
                </button>
        </form>
    );
}; 

export default AddTodo;