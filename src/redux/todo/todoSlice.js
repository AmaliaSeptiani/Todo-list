import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		load: (state) => {
			try {
				const data = localStorage.getItem('todos');
				if (data) state.todos = JSON.parse(data);
			} catch (error) {
				console.log(error);
			}
		},
		append: (state, action) => {
			state.todos = [
				...state.todos,
				{
					id: Date.now(),
					title: action.payload,
					completed: false,
				},
			];
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		remove: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		check: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			});
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		edit: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						title: action.payload.title,
					};
				}
				return todo;
			});
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
	},
});

export const { append, remove, check, load, edit } = todoSlice.actions;

export default todoSlice.reducer;
