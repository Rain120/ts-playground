import { PartialTodo } from "../types";

type UtilRequired<T> = {
	[K in keyof T]-?: T[K];
};

type Required1 = Required<PartialTodo>;
type UtilRequired_T1 = UtilRequired<PartialTodo>;
