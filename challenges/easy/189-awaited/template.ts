export type MyAwaited<T> = T extends PromiseLike<infer R>
    ? R extends PromiseLike<any>
        ? MyAwaited<R>
        : R
    : T;

// 原生实现
export type MyAwaited2<T> = T extends null | undefined
    ? T
    : T extends object & { then(onFulfilled: infer FP, ...args: infer _): any }
    ? FP extends (value: infer V, ...args: infer _) => any
        ? MyAwaited2<V>
        : never
    : T;
