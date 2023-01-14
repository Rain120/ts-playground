import { UnionReplace } from './template';
import type { Equal, Expect } from '../../../utils';
import { ExpectFalse, NotEqual } from '../../../utils';

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,
]
