type UtilPartial<T> = {
	[K in keyof T]?: T[K];
}

type todo1 = Partial<Todo>;
type todo2 = UtilPartial<Todo>;
