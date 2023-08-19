let todos = [
	{ id: 1, text: 'Learn React', completed: false },
	{ id: 2, text: 'Build an app', completed: false },
	{ id: 3, text: 'Buil an app', completed: false },
];

export function getTodos() {
	return todos;
}

export function addTodo(newTodo) {
	newTodo.id = todos[todos.length - 1].id + 1;
	todos = [...todos, newTodo];
}

export function updatedTodo(id) {
	let updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
	todos = updatedTodos;
	console.log(todos);
}
