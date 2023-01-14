import { CapitalizeNestObjectKeys } from './template';
import type { Equal, Expect } from '../../../utils';
import { ExpectFalse, NotEqual } from '../../../utils';

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]
