import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load, append, check, remove, edit } from './redux/todo/todoSlice.js';

import { cn } from './lib/cn.js';
import { Pencil, Trash } from 'lucide-react';

import Button from './components/Button.jsx';
import Search from './components/Search.jsx';
import Checkbox from './components/Checkbox.jsx';

const FILTER = {
	ALL: 'All Todos',
	ACTIVE: 'Active',
	COMPLETED: 'Completed',
};

const App = () => {
	const dispatch = useDispatch();
	const [text, setText] = React.useState('');
	const [filter, setFilter] = React.useState(FILTER.ALL);
	const [selected, setSelected] = React.useState(null);

	const todos = useSelector((state) => state.todo.todos);
	const filtered = todos.filter((todo) => {
		if (filter === FILTER.ALL) return true;
		else if (filter === FILTER.ACTIVE) return !todo.completed;
		else if (filter === FILTER.COMPLETED) return todo.completed;
	});

	React.useEffect(() => {
		dispatch(load());
	}, [dispatch]);

	React.useEffect(() => {
		if (selected) setText(selected.title);
		else setText('');
	}, [selected]);

	const createTodo = (event) => {
		event.preventDefault();
		if (!text) return;

		if (selected) {
			dispatch(edit({ ...selected, title: text }));
			setSelected(null);
		} else dispatch(append(text));
		setText('');
	};

	return (
		<div className='antialiased bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100'>
			<div className='container flex items-start justify-center min-h-screen px-4 py-10 mx-auto md:items-center'>
				<div className='w-full max-w-xl'>
					<form className='flex items-center mb-6 space-x-2' onSubmit={createTodo}>
						<Search value={text} onChange={(event) => setText(event.target.value)} className='w-full' />
						<Button type='submit' className={cn('text-white bg-indigo-500 rounded-lg hover:bg-indigo-600')}>
							{selected ? 'Edit' : 'Create'}
						</Button>
						{selected && (
							<Button
								type='button'
								className={cn('text-white bg-zinc-500 rounded-lg hover:bg-zinc-600')}
								onClick={() => setSelected(null)}>
								Cancel
							</Button>
						)}
					</form>

					<div className='flex items-center mb-4 space-x-2'>
						{Object.values(FILTER).map((value) => (
							<Button
								key={value}
								className={cn(
									filter === value
										? 'bg-indigo-500 text-white hover:bg-indigo-600'
										: 'bg-zinc-300 text-zinc-800 hover:bg-zinc-100'
								)}
								onClick={() => setFilter(value)}>
								{value}
							</Button>
						))}
					</div>

					<div className='flex flex-col space-y-2 overflow-y-auto h-[80vh] md:h-96 hide-scrollbar'>
						{filtered?.map((todo) => (
							<div
								key={todo.id}
								className='flex items-center justify-between px-4 py-3 bg-white border rounded-md cursor-pointer hover:bg-zinc-50'>
								<div className='flex items-center space-x-2'>
									<Checkbox checked={todo.completed} onChange={() => dispatch(check(todo.id))} />
									<span
										className={cn(
											'text-sm font-medium transition-colors duration-200',
											todo.completed && 'line-through text-zinc-400'
										)}>
										{todo.title}
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Pencil
										className='w-4 h-4 text-zinc-600 hover:text-teal-500'
										onClick={() => setSelected(todo)}
									/>
									<Trash
										className='w-4 h-4 text-zinc-600 hover:text-red-500'
										onClick={() => dispatch(remove(todo.id))}
									/>
								</div>
							</div>
						))}

						{filtered?.length === 0 && (
							<div className='flex items-center justify-center h-full'>
								<span className='text-sm font-medium'>No todos found</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
