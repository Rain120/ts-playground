declare function f1(arg: {a: number; b: string}): void;

type UtilReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type ReturnType_T0 = ReturnType<() => string>; // []
type ReturnType_T1 = ReturnType<(s: string) => [string]>; // [string]
type ReturnType_T2 = ReturnType<<T>(arg: T) => T>; // unknown

type UtilReturnType_T0 = UtilReturnType<() => string>; // []
type UtilReturnType_T1 = UtilReturnType<(s: string) => [string]>; // [string]
type UtilReturnType_T2 = UtilReturnType<<T>(arg: T) => T>; // unknown
