import { MyAwaited, MyAwaited2 } from './template';
import type { Equal, Expect } from '../../../utils';

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

type cases2 = [
  Expect<Equal<MyAwaited2<X>, string>>,
  Expect<Equal<MyAwaited2<Y>, { field: number }>>,
  Expect<Equal<MyAwaited2<Z>, string | number>>,
  Expect<Equal<MyAwaited2<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited2<T>, number>>,
]

type error = MyAwaited<number>
