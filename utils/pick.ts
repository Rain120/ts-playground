export type UtilPick<T, K extends keyof T> = {
	[P in K]: T[P];
};

type TodoWithDay = Pick<Todo, 'title' | 'completed'>;
type UtilTodoWithDay = UtilPick<Todo, 'title' | 'completed'>;

const plan: TodoWithDay = {
	title: 'Writing for Typescript Guide',
	completed: true,
};
