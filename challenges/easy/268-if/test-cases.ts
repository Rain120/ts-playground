import { If } from './template';
import type { Equal, Expect } from '../../../utils';

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

type error = If<null, 'a', 'b'>
