import { HelloWorld } from './template';
import type { Equal, Expect, NotAny } from '../../../utils';

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
