import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from './todoReducer'; // Make sure the import path is correct

function TodoList() {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todo);

    const [editValue, setEditValue] = useState(""); // State to hold the edited value

    const handleEdit = (todo) => {
        if (editValue) {
            dispatch(editTodo(todo.id, editValue));
            setEditValue(""); // Clear the edit value after editing
        }
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {editValue ? (
                        <div>
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                            />
                            <button onClick={() => handleEdit(todo)}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <span>{todo.value}</span>
                            <button onClick={() => setEditValue(todo.value)}>Edit</button>
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TodoList;
