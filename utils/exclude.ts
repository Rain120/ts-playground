export type UtilExclude<T, K> = T extends K ? never : T;

type Exclude_U0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type Exclude_M0 = UtilExclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"

type Exclude_U1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
type Exclude_M1 = UtilExclude<'a' | 'b' | 'c', 'a' | 'b'>;
