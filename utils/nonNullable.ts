type UtilNonNullable<T> = T extends null | undefined ? never : T;
type UtilNonNullable1<T> = T & {};

type NonNullable_T0 = NonNullable<'a' | null>; // 'a'
type UtilNonNullable_T0 = UtilNonNullable<'a' | null | undefined>; // 'a'
type UtilNonNullable_T1 = UtilNonNullable1<'a' | null | undefined>; // 'a'
