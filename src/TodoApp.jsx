import { useState } from 'react';
import { useGetTodosByIdQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
	const [todoId, settodoId] = useState(1);
	// const { data: todos = [], isLoading, isFetching } = useGetTodosQuery();
	const { data: todo, isLoading, isFetching } = useGetTodosByIdQuery(todoId);

	const nextTodo = () => {
		settodoId(todoId + 1);
	};

	const prevTodo = () => {
		if (todoId === 1) return;
		settodoId(todoId - 1);
	};

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />
			<h4>IsLoading: {isLoading ? 'true' : 'false'}</h4>

			<pre>{JSON.stringify(todo)}</pre>
			<button onClick={prevTodo}>Prev Todo</button>
			<button onClick={nextTodo}>Next Todo</button>

			{/* <ul>
				{todos.map(({ id, title, completed }) => (
					<li key={id}>
						<strong>{completed ? 'Completado' : 'Incompleto'}</strong>
						{title}
					</li>
				))}
			</ul> */}
		</>
	);
};
