export type MyOmit<T, K extends string | number | symbol> = {
    [P in Exclude<keyof T, K>]: T[P];
}
