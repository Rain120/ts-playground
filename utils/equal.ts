// https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
export type Equal<X, Y> = (
	<T>() => T extends X ? true : false
) extends (
	<T>() => T extends Y ? true : false
) ? true : false

type Equal_T1 = Equal<string, string>
type Equal_T2 = Equal<string, number>
type Equal_T3 = Equal<() => string, () => string>
type Equal_T4 = Equal<() => string, () => number>