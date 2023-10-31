import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/reducers/todo-reducer';

function TodoList() {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todo);

    const [editValues, setEditValues] = useState({});

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleEdit = (id) => {
        dispatch(editTodo(id, editValues[id]));
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {editValues[todo.id] !== undefined ? (
                        <div>
                            <input
                                type="text"
                                value={editValues[todo.id]}
                                onChange={(e) => setEditValues({ ...editValues, [todo.id]: e.target.value })}
                            />
                            <button onClick={() => handleEdit(todo.id)}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <span>{todo.value}</span>
                            <button onClick={() => setEditValues({ ...editValues, [todo.id]: todo.value })}>✏️</button>
                            <button onClick={() => handleDelete(todo.id)}>❌</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TodoList;
