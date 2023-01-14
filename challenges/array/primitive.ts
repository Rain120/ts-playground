// challenges/easy/533-concat
export type Concat<T extends any[], U extends any[]> = [...T, ...U];

// challenges/medium/16-pop
export type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : [];

// challenges/easy/3057-push
export type Push<T extends any[], U extends any> = [...T, U]

// challenges/medium/3062-shift
export type Shift<T extends any[]> = T extends [infer F, ...infer R] ? R : [];

// challenges/easy/3060-unshift
export type Unshift<T extends any[], U> = [U, ...T];

// challenges/medium/459-flatten
export type Flatten<T extends any[]> = any