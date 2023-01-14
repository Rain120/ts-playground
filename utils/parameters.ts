declare function f1(arg: {a: number; b: string}): void;

type UtilParameters<T> = T extends (...args: infer R) => any ? R : never;

type Parameters_T0 = Parameters<() => string>; // []
type Parameters_T1 = Parameters<(s: string) => void>; // [string]
type Parameters_T2 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

type UtilParameters_T0 = UtilParameters<() => string>; // []
type UtilParameters_T1 = UtilParameters<(s: string) => void>; // [string]
type UtilParameters_T2 = UtilParameters<<T>(arg: T) => T>; // [arg: unknown]
