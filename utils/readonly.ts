type UtilReadonly<T> = {
	readonly [K in keyof T]: T[K];
}

type readonly1 = Readonly<Todo>;
type readonly2 = UtilReadonly<Todo>;
