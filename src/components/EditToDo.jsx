import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/reducers/todo-reducer'; 

function EditTodo({ todo }) {
    const dispatch = useDispatch();
    const [input, setInput] = useState(todo.value); 

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editTodo(todo.id, input)); 
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

export default EditTodo;