import { useSelector } from 'react-redux'

function TodoList() {
    const {todos} = useSelector(state => state.todo)
  return (
    <div>
        {todos.map((todo) => (
        <div key={todo.id}>
            <span>{todo.value}</span>
            <button>✏️</button>
            <button>❌</button>
        </div>
        ))}
           </div>
  );
}

export default TodoList;