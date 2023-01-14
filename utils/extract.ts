type UtilExtract<T, U> = T extends U ? U : never;

type Extract_T0 = Extract<'a' | 'b', 'a'> // 'a'
type UtilExtract_T0 = UtilExtract<'a' | 'b', 'a'> // 'a'
